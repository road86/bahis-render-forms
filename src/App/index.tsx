import axios from 'axios';
import OdkFormRenderer from 'odkformrenderer';
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
      .post(formAttributesURL, urlParams, {
        headers: {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods':
            'DELETE, GET, OPTIONS, POST, PATCH, PUT',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
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

        if (csvUrl) {
          this.setState({
            csv: {},
            defaultLanguage,
            errorList: [],
            formJson,
            formUuid,
            isLoading: true,
            media: {},
            postbackUrl,
            userInput: csvUserInput,
          });
        } else {
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
        }

        if (csvUrl) {
          const JSZip = require('jszip');
          const JSZipUtils = require('jszip-utils');

          JSZipUtils.getBinaryContent(csvUrl, (err: any, data: any) => {
            if (err) {
              throw err;
            }

            JSZip.loadAsync(data).then((zip: any) => {
              const csvFiles = Object.keys(zip.files);
              this.writeCsvToObj(zip, csvFiles, 0, {}, csvUserInput);
            });
          });
        }
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
      const odkProps: OdkProps = {
        csvList: {},
        defaultLanguage: 'English',
        formDefinitionJson: this.state.formJson,
        handleSubmit: this.handleSubmit,
        languageOptions,
        userInputJson: this.state.userInput,
      };

      return (
        <div className="App">
          {this.state.formJson ? <OdkFormRenderer {...odkProps} /> : null}
        </div>
      );
    }
  }

  public handleSubmit() {
    console.log('Test');
  }

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
}

export default App;
