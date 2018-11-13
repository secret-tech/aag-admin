import { createAction, createReducer } from '../../../utils/actions';

export const OPEN_USER_POPUP = 'dashboard/userPopup/OPEN_USER_POPUP';
export const CLOSE_USER_POPUP = 'dashboard/userPopup/CLOSE_USER_POPUP';

export const openUserPopup = createAction(OPEN_USER_POPUP);
export const closeUserPopup = createAction(CLOSE_USER_POPUP);

const initialState = {
  open: false,
  user: {
    id: '0x00',
    email: 'amazing.space.invader@gmail.com',
    datereg: 'datereg',
    lastActivity: 'last activity',
    scope: 'scope?',
    sub: 'sub?',
    customData: 'custom data?'
  }
};

export default createReducer({
  [OPEN_USER_POPUP]: (state, { payload }) => ({
    ...state,
    open: true,
    // user: payload
  }),

  [CLOSE_USER_POPUP]: (state, { payload }) => ({
    open: false,
    user: initialState.user
  })
}, initialState);
