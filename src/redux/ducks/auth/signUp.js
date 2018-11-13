import { createAsyncAction, createReducer } from '../../../utils/actions';

export const SIGN_UP = 'auth/signUp/SIGN_UP';

export const signUp = createAsyncAction(SIGN_UP);

const initialState = {};

export default createReducer({}, initialState);
