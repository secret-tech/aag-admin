import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/configureStore';

import Main from './containers/common/Main';

import './assets/css/main.css';
import * as serviceWorker from './assets/workers/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
