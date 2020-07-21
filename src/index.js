import React from 'react';
import ReactDOM from 'react-dom';
// import DemoParent from './DemoParent';
// import Transition from './Transition';
// import TodoList from './TodoList';
import TodoListReactRedux from './TodoList-ReactRedux';
import store from './store1';
import { Provider } from 'react-redux';

const App = (
  <Provider store={store}>
    <TodoListReactRedux />
  </Provider>
)

ReactDOM.render(App,
  document.getElementById('root')
);