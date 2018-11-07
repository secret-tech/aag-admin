import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import createRootReducer from './rootReducer';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const configureStore = (initialState = {}) => {
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware
  ];

  const store = createStore(
    createRootReducer(history), 
    initialState, 
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();