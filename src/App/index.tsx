import axios from 'axios';
import OdkFormRenderer from 'odkformrenderer';
import 'odkformrenderer/example/index.css';
import queryString from 'query-string';
import * as React from 'react';
import { ClipLoader } from 'react-spinners';
import { languageOptions } from '../constants';

interface AppState {
  csv: any;
  defaultLanguage: string;
  errorList: any;
  formJson: any;
  formUuid: string;
  isLoading: boolean;
  media: any;
  postbackUrl: string;
  userInput: any;
}

interface OdkProps {
  csvList: any;
  defaultLanguage: string;
  formDefinitionJson: any;
  handleSubmit: any;
  userInputJson: any;
  languageOptions: any;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      csv: {},
      defaultLanguage: '',
      errorList: [],
      formJson: {},
      formUuid: '',
      isLoading: true,
      media: {},
      postbackUrl: '',
      userInput: {},
    };
  }
  public componentDidMount() {
    const urlParams = queryString.parse(window.location.search);
    const formAttributesURL =
      'http://' + urlParams.url + '/' + urlParams.username + '/form_attributes';

    axios
      .post(formAttributesURL, urlParams)
      .then(response => {
        const postbackUrl: string =
          response.data && response.data.submission_url;
        const formUuid: string = response.data && response.data.uuid;
        const csvUrl: string = response.data && response.data.csv;
        const dataJson: any = response.data && response.data.data_json;
        const formJson: any = response.data && response.data.json;
        const defaultLanguage: string =
          formJson.default_language && formJson.default_language;

        const userInput: any = dataJson ? dataJson : {};
        const csvUserInput: any = {};

        /**  
         * mpower PM sayem siddiqui sayed we don't need this condition 
         * */
        // if (csvUrl) {
        //   this.setState({
        //     csv: {},
        //     defaultLanguage,
        //     errorList: [],
        //     formJson,
        //     formUuid,
        //     isLoading: true,
        //     media: {},
        //     postbackUrl,
        //     userInput: csvUserInput,
        //   });
        // } else {
        this.setState({
          csv: {},
          defaultLanguage,
          errorList: [],
          formJson,
          formUuid,
          isLoading: false,
          media: {},
          postbackUrl,
          userInput,
        });
        // }

        if (csvUrl) {
          const JSZip = require('jszip');
          const JSZipUtils = require('jszip-utils');

          JSZipUtils.getBinaryContent(csvUrl, (err: any, data: any) => {
            if (err) {
              if (
                window.confirm(
                  'An Error Occurred. Do you want to Reload Again?'
                )
              ) {
                window.location.reload();
              } else {
                throw err;
              }
            }

            JSZip.loadAsync(data).then((zip: any) => {
              const csvFiles = Object.keys(zip.files);
              this.writeCsvToObj(zip, csvFiles, 0, {}, csvUserInput);
            });
          });
        }
      })
      .catch(error => {
        window.alert('Authentication Error!');
        throw error;
      });
  }

  public render() {
    const override = `
      display: block;
      margin: 0 auto;
      border-color: #0b5679;
      margin-top: 20%;
    `;

    if (this.state.isLoading) {
      return (
        <div className="sweet-loading">
          <ClipLoader css={override} size={50} loading={true} />
        </div>
      );
    } else {
      const language: string =
        this.state.defaultLanguage === 'default'
          ? 'English'
          : this.state.defaultLanguage;
      const odkProps: OdkProps = {
        csvList: this.state.csv,
        defaultLanguage: language,
        formDefinitionJson: this.state.formJson,
        handleSubmit: this.handleSubmit,
        languageOptions,
        userInputJson: this.state.userInput,
      };

      console.log('-------------odk props ------------------');
      console.log(odkProps);
      return (
        <div className="App">
          {this.state.formJson ? <OdkFormRenderer {...odkProps} /> : null}
        </div>
      );
    }
  }

  /** submit user input data to the postbackUrl
   * @param {any} userInput - the user input data json from OdkFromRenderer
   * @param {any} mediaList - the mediaList object if present or empty object
   */
  public handleSubmit = (userInput: any, mediaList: any) => {

    const result = window.confirm('Are you sure you want to submit ?');
    if (!result) return;
    if (
      userInput &&
      userInput !== 'Field Violated' &&
      userInput !== 'submitted'
    ) {
      const postbackUrl = this.state.postbackUrl;
      const formDefinition = this.state.formJson;
      const idString: string = 'id_string';
      let formData = JSON.parse(JSON.stringify(userInput)) || {};

      formData = { ...formData, 'formhub/uuid': this.state.formUuid };
      formData = { ...formData, 'meta/instanceID': this.guid() };
      const blob = new Blob(
        [this.convertJsonToXml(formData, formDefinition[idString])],
        { type: 'text/xml' }
      );
      const formDataForBlob: any = new FormData();
      formDataForBlob.append('xml_submission_file', blob);
      if (Object.keys(mediaList).length) {
        Object.keys(mediaList).forEach(fileName => {
          formDataForBlob.append(fileName, mediaList[fileName]);
        });
      }

      axios
        .post(postbackUrl, formDataForBlob, {
          headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods':
              'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          alert('Form Submitted Successfully.');
          // tslint:disable-next-line: no-console
          console.log(response);
          window.location.reload();
          window.scrollTo(0, 0);
        })
        .catch(error => {
          throw error;
        });
    }
  };

  /** Convert csv to human readable object and assign this to the App state
   * @param {any} zip - the zip collecyion of csv files generated from csvUrl
   * @param {any} csvFiles - the csv files array from zip file
   * @param {number} i - initially zero to indicate the first csv file
   * @param {any} tmpCsv - the converted csv object that is assigned to the state
   * @param {any} preloadUserInput - the preload user input data
   */
  private writeCsvToObj = (
    zip: any,
    csvFiles: any,
    i: number,
    tmpCsv: any,
    preloadUserInput: any
  ) => {
    const self: any = this;
    zip
      .file(csvFiles[i])
      .async('text')
      .then(function success(txt: any) {
        const arr = txt.split('\n');
        const jsonObj = [];
        const headers = arr[0].split(',');
        for (let n: number = 1; n < arr.length - 1; n++) {
          const data = arr[n].split(',');
          const obj: any = {};
          for (let j = 0; j < data.length; j++) {
            const key: any = headers[j].trim();
            obj[key] = data[j].trim();
          }
          jsonObj.push(obj);
        }

        tmpCsv[csvFiles[i]] = jsonObj;

        i++;
        if (i < csvFiles.length) {
          return self.writeCsvToObj(zip, csvFiles, i, tmpCsv, preloadUserInput);
        } else {
          if (tmpCsv !== {}) {
            self.setState({
              csv: tmpCsv,
              isLoading: false,
              userInput: preloadUserInput,
            });
          }
        }
        return tmpCsv;
      });
  };

  private s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  private guid = () => {
    return (
      'uuid:' +
      this.s4() +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      this.s4() +
      this.s4()
    );
  };

  /** converts json object to xml text
   * @param {Object} jsnObj - the user input json object
   * @param {string} formIdString - the form unique name
   * @returns {string} - the odk format xml string
   */
  private convertJsonToXml = (jsnObj: any, formIdString: any): string => {
    const modifiedJsnObj: any = {};
    Object.keys(jsnObj).forEach(jsnKey => {
      const jsnPath = jsnKey.split('/');
      this.assignJsnValue(modifiedJsnObj, jsnPath, 0, jsnObj[jsnKey]);
    });
    let xmlString = "<?xml version='1.0'?>";
    xmlString += `<${formIdString} id="${formIdString}">`;

    Object.keys(modifiedJsnObj).forEach(mkey => {
      xmlString += this.generateIndividualXml(mkey, modifiedJsnObj[mkey]);
    });

    xmlString += `</${formIdString}>`;
    return xmlString;
  };

  /** recursive method that transforms odk json format object to a simpler one
   * @param {Object} mJsnObj - modified json
   * @param {string[]} xPath - the path array generated by splitting the key with '/'
   * @param {number} index - the current index of the xpath
   * @param {any} xvalue - the value to be assigned to the modified object based on xpath key
   */
  private assignJsnValue = (
    mJsnObj: any,
    xPath: any,
    index: number,
    xvalue: any
  ) => {
    if (index === xPath.length - 1) {
      // eslint-disable-next-line no-param-reassign
      mJsnObj[xPath[index]] = xvalue;
      return;
    }
    if (!(xPath[index] in mJsnObj)) {
      // eslint-disable-next-line no-param-reassign
      mJsnObj[xPath[index]] = {};
      this.assignJsnValue(mJsnObj[xPath[index]], xPath, index + 1, xvalue);
    } else {
      this.assignJsnValue(mJsnObj[xPath[index]], xPath, index + 1, xvalue);
    }
  };

  /** transforms individual json key, value to xml attribute based on json value type
   * @param {string} xkey - json key
   * @param {any} xvalue - json value
   * @returns {string} - the transformed xml value
   */
  private generateIndividualXml = (xkey: any, xvalue: any) => {
    let tmp = '';
    if (xvalue !== null && xvalue !== undefined) {
      if (Array.isArray(xvalue)) {
        if (xvalue.length > 0) {
          if (xvalue[0].constructor.name === 'Object') {
            xvalue.forEach(tmpValue => {
              tmp += this.generateIndividualXml(xkey, tmpValue);
            });
          } else if (xvalue[0].constructor.name === 'Date') {
            tmp += `<${xkey}>`;
            xvalue.forEach(tmpValue => {
              tmp += `${tmpValue} `;
            });
            tmp += `</${xkey}>`;
          } else {
            tmp += `<${xkey}>`;
            xvalue.forEach(tmpValue => {
              tmp += `${typeof tmpValue === 'string'
                ? this.handleXmlInvalidEntries(tmpValue)
                : tmpValue
                } `;
            });
            tmp += `</${xkey}>`;
          }
        }
      } else if (xvalue.constructor.name === 'Object') {
        if (Object.keys(xvalue).length !== 0) {
          tmp += `<${xkey}>`;
          Object.keys(xvalue).forEach(tmpKey => {
            tmp += this.generateIndividualXml(tmpKey, xvalue[tmpKey]);
          });
          tmp += `</${xkey}>`;
        }
      } else if (xvalue.constructor.name === 'Date') {
        tmp += `<${xkey}>`;
        tmp += xvalue.toISOString();
        tmp += `</${xkey}>`;
      } else {
        tmp += `<${xkey}>`;
        tmp +=
          typeof xvalue === 'string'
            ? this.handleXmlInvalidEntries(xvalue)
            : xvalue;
        tmp += `</${xkey}>`;
      }
    }
    return tmp;
  };

  /** Replaces invalid xml entries with special xml entries
   * @param {string} affectedString - the string containing invalid xml invalid entries
   * @returns {string} - the modified string with no invalid xml entries
   */
  private handleXmlInvalidEntries = (affectedString: any) => {
    let tmpString = affectedString;
    tmpString = tmpString.replace('&', '&amp;');
    tmpString = tmpString.replace('<', '&lt;');
    tmpString = tmpString.replace('>', '&gt;');
    return tmpString;
  };
}

export default App;
