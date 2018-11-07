import { combineReducers } from 'redux';

import counter from './ducks/common/counter';

export default combineReducers({
  common: combineReducers({
    counter
  })
});
