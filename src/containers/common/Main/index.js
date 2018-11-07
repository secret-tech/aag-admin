import React from 'react';
import { connect } from 'react-redux';

import { counterIncrement, counterDecrement } from '../../../redux/ducks/common/counter';

import s from './styles.module.css';

const Main = (props) => {
  return (
    <div className={s.hello}>
      <span className={s.green}>Hello </span>
      <span className={s.red}>fckn </span>
      <span className={s.green}>world</span>

      <div>
        <button type="button" onClick={() => props.counterIncrement()}>INCREMENT THAT SHIT</button>
        <span>{props.counter}</span>
        <button type="button" onClick={() => props.counterDecrement()}>DECREMENT THAT SHIT</button>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    counter: state.common.counter
  }),
  {
    counterIncrement,
    counterDecrement
  }
)(Main);
