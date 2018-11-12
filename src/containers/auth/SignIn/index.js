import React from 'react';

import SignInForm from '../../../components/auth/SignInForm';

import s from './styles.module.css';

const SignIn = () => {
  return (
    <div className={s.container}>
      <div className={s.form}>
        <SignInForm/>
      </div>
    </div>
  );
};

export default SignIn;
