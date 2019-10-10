import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/login';
import store from './store';
import './index.less';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);