import { createAction, createAsyncAction, createReducer } from '../../../utils/actions';

export const OPEN_EDIT_USER_POPUP = 'dashboard/editUser/OPEN_EDIT_USER_POPUP';
export const CLOSE_EDIT_USER_POPUP = 'dashboard/editUser/CLOSE_EDIT_USER_POPUP';
export const UPDATE_USER = 'dashboard/editUser/UPDATE_USER';

export const openEditUserPopup = createAction(OPEN_EDIT_USER_POPUP);
export const closeEditUserPopup = createAction(CLOSE_EDIT_USER_POPUP);
export const updateUser = createAsyncAction(UPDATE_USER);

const initialState = {
  open: false,
  initialValues: {
    id: '',
    email: '',
    login: '',
    sub: '',
    scope: '',
    password: ''
  }
};

export default createReducer({
  [OPEN_EDIT_USER_POPUP]: (state, { payload }) => ({
    ...state,
    open: true,
    initialValues: {
      ...payload
    }
  }),

  [CLOSE_EDIT_USER_POPUP]: (state) => ({
    ...state,
    open: false,
    initialValues: initialState.initialValues
  })
}, initialState);
