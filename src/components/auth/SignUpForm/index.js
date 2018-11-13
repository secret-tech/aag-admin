import React from 'react';
import MakeAsyncFunction from 'react-redux-promise-listener';
import { Form, Field } from 'react-final-form';
import { FormGroup, InputGroup, Button, Tooltip, Intent } from '@blueprintjs/core';

import PasswordInput from '../../../components/_forms/PasswordInput';

import { promiseListener } from '../../../redux/configureStore';
import { signUp } from '../../../redux/ducks/auth/signUp';
import { composeValidators, required, mustBeEmail, mustBeValidPassword, minLength, maxLength } from '../../../utils/formValidators';


const SignUpForm = () => {
  return (
    <MakeAsyncFunction
      listener={promiseListener}
      start={signUp.REQUEST}
      resolve={signUp.SUCCESS}
      reject={signUp.FAILURE}>
      {(onSubmit) => (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="email" 
                validate={composeValidators(required, mustBeEmail)}>
                {({ input, meta }) => (
                  <FormGroup
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <InputGroup
                        type="email" 
                        placeholder="enter your email"
                        large
                        intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                        {...input}/>
                    </Tooltip>
                  </FormGroup>
                )}
              </Field>
    
              <Field
                name="password" 
                validate={composeValidators(required, mustBeValidPassword, minLength(8), maxLength(18))}>
                {({ input, meta }) => (
                  <FormGroup
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <PasswordInput
                        placeholder="enter your password"
                        large
                        intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                        {...input}/>
                    </Tooltip>
                  </FormGroup>
                )}
              </Field>
    
              <Button 
                type="submit"
                fill
                large
                minimal
                text="Sign up"
                rightIcon="arrow-right"
                intent={Intent.PRIMARY}
                loading={submitting}
                disabled={invalid || pristine}/>
            </form>
          )}/>
      )}
    </MakeAsyncFunction>
  );
};

export default SignUpForm;