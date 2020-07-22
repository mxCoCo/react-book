import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunk, sagaMiddleware]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(sagas)

export default store