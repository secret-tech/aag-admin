import React from 'react';

import SignUpForm from '../../../components/auth/SignUpForm';

import s from './styles.module.css';

const SignUp = () => {
  return (
    <div className={s.container}>
      <div className={s.form}>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default SignUp;
