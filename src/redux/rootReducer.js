import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './ducks/common/counter';

import signUp from './ducks/auth/signUp';
import signIn from './ducks/auth/signIn';
import signOut from './ducks/auth/signOut';

export default (history) => combineReducers({
  router: connectRouter(history),

  common: combineReducers({
    counter
  }),

  auth: combineReducers({
    signUp,
    signIn,
    signOut
  })
});
