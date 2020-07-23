import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styled';
import { GlobalStyleFont } from './static/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <GlobalStyleFont />
    <App />
  </Fragment>,
  document.getElementById('root')
);