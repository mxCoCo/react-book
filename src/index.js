import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styled';
import { GlobalStyleFont } from './static/iconfont/iconfont';
import store from './store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <GlobalStyleFont />
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>,
  document.getElementById('root')
);