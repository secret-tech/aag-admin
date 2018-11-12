import React from 'react';
import MakeAsyncFunction from 'react-redux-promise-listener';
import { Form, Field } from 'react-final-form';
import { FormGroup, InputGroup, Button, Intent } from '@blueprintjs/core';

import PasswordInput from '../../../components/_forms/PasswordInput';

import { promiseListener } from '../../../redux/configureStore';
import { signIn } from '../../../redux/ducks/auth/signIn';
import { composeValidators, required, mustBeEmail, minLength, maxLength } from '../../../utils/formValidators';


const SignInForm = () => {
  return (
    <MakeAsyncFunction
      listener={promiseListener}
      start={signIn.REQUEST}
      resolve={signIn.SUCCESS}
      reject={signIn.FAILURE}>
      {(onSubmit) => (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Field 
                name="email" 
                validate={composeValidators(required, mustBeEmail)}>
                {({ input, meta }) => (
                  <FormGroup
                    label="E-mail"
                    labelInfo="(required)"
                    helperText={meta.touched && meta.error}
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <InputGroup
                      type="email" 
                      placeholder="enter your email"
                      large
                      intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                      {...input}/>
                  </FormGroup>
                )}
              </Field>
    
              <Field 
                name="password" 
                validate={composeValidators(required, minLength(8), maxLength(18))}>
                {({ input, meta }) => (
                  <FormGroup
                    label="Password"
                    labelInfo="(required)"
                    helperText={meta.touched && meta.error}
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <PasswordInput
                      placeholder="enter your password"
                      large
                      intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                      {...input}/>
                  </FormGroup>
                )}
              </Field>
    
              <Button 
                type="submit"
                fill
                large
                minimal
                text="Sign in"
                rightIcon="arrow-right"
                intent={Intent.PRIMARY}
                disabled={submitting || pristine}/>
            </form>
          )}/>
      )}
    </MakeAsyncFunction>
  );
};

export default SignInForm;