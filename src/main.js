// Setting up 'HMR'
if(module.hot) {
  module.hot.accept()
}

// WEBPACK FEATURES
// React
import './webpack-tests/react/app.js';

// import './styles/main.scss';

console.log(`Environment: ${ENV}`);
console.log(`App name: ${APP_NAME}`);