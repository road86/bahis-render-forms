# Odk Form Renderer Standalone 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The app behaves similar to the [odk-form-renderer-v1](https://bitbucket.org/mpowersocial/odk-form-renderer-v1/src/master/) app. Internally, it uses the library [odk-form-renderer-v2](https://bitbucket.org/mpowersocial/odk-form-renderer-v2/src/master/) and is written in typescript instead of javascript.

To render a form, you will need to pass URL parameters including but not limited to the `username` and `url`. The `url` is the location of form definition and `username` is usually the admin user name through which form definition is read. Based on the provided information, the app will make a post request to the server (`http://${url}/${username}/form_attributes`) to retrieve the required properties.

> Please see any existing running instance or the codebase for detailed understanding. The implementation is flexible and can be modified to suit any needs.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
