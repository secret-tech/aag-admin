import { createAsyncAction, createReducer } from '../../../utils/actions';

export const SIGN_OUT = 'auth/signOut/SIGN_OUT';

export const signOut = createAsyncAction(SIGN_OUT);

const initialState = {};

export default createReducer({}, initialState);
