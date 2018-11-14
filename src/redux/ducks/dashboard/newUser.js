import { createAction, createAsyncAction, createReducer } from '../../../utils/actions';

export const OPEN_NEW_USER_POPUP = 'dashboard/newUserPopup/OPEN_NEW_USER_POPUP';
export const CLOSE_NEW_USER_POPUP = 'dashboard/newUserPopup/CLOSE_NEW_USER_POPUP';
export const CREATE_NEW_USER = 'dashboard/newUserPopup/CREATE_NEW_USER';

export const openNewUserPopup = createAction(OPEN_NEW_USER_POPUP);
export const closeNewUserPopup = createAction(CLOSE_NEW_USER_POPUP);
export const createNewUser = createAsyncAction(CREATE_NEW_USER);

const initialState = {
  open: false,
};

export default createReducer({
  [OPEN_NEW_USER_POPUP]: (state) => ({
    ...state,
    open: true
  }),

  [CLOSE_NEW_USER_POPUP]: (state) => ({
    ...state,
    open: false
  })
}, initialState);
