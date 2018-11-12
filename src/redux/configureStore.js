import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createReduxPromiseListener from 'redux-promise-listener'

import createRootReducer from './rootReducer';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();
const reduxPromiseListener = createReduxPromiseListener();

const middlewares = [
  routerMiddleware(history),
  sagaMiddleware,
  reduxPromiseListener.middleware
];

const store = createStore(
  createRootReducer(history), 
  {}, 
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const promiseListener = reduxPromiseListener;
export default store;
