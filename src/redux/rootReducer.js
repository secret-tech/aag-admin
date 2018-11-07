import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './ducks/common/counter';

export default (history) => combineReducers({
  router: connectRouter(history),

  common: combineReducers({
    counter
  })
});
