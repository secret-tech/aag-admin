import { createAction, createReducer } from '../../../utils/actions';


export const COUNTER_INCREMENT = 'common/counter/COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'common/counter/COUNTER_DECREMENT';

export const counterIncrement = createAction(COUNTER_INCREMENT);
export const counterDecrement = createAction(COUNTER_DECREMENT);

const initialState = 0;

export default createReducer({
  [COUNTER_INCREMENT]: (state) => state + 1,
  [COUNTER_DECREMENT]: (state) => state - 1
}, initialState);
