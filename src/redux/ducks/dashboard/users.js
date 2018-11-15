import { createAsyncAction, createReducer } from '../../../utils/actions';

export const FETCH_USERS = 'dashboard/users/FETCH_USERS';

export const fetchUsers = createAsyncAction(FETCH_USERS);

const initialState = {
  loading: false,
  users: [],
  nextCursor: '',
  prevCursor: ''
};

export default createReducer({
  [fetchUsers.REQUEST]: (state, { payload }) => ({
    ...state,
    loading: true
  }),

  [fetchUsers.SUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }),

  [fetchUsers.FAILURE]: (state) => ({
    loading: false
  })
}, initialState);
