import { createAsyncAction, createReducer } from '../../../utils/actions';

export const SIGN_IN = 'auth/signIn/SIGN_IN';

export const signIn = createAsyncAction(SIGN_IN);

const initialState = {
  loading: false
};

export default createReducer({
  [signIn.REQUEST]: (state) => ({
    ...state,
    loading: true
  }),

  [signIn.SUCCESS]: (state) => ({
    ...state,
    loading: false
  }),

  [signIn.FAILURE]: (state) => ({
    ...state,
    loading: false
  })
}, initialState);
