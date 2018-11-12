import React from 'react';
import { Form, Field } from 'react-final-form';
import { FormGroup, InputGroup, Button, Intent } from '@blueprintjs/core';

import PasswordInput from '../../../components/_forms/PasswordInput';

import { composeValidators, required, mustBeEmail, minLength, maxLength } from '../../../utils/formValidators';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  console.log(JSON.stringify(values, 0, 2))
}

const SignInForm = () => {
  return (
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
  );
};

export default SignInForm;