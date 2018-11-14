import React from 'react';
import MakeAsyncFunction from 'react-redux-promise-listener';
import { Form, Field } from 'react-final-form';
import { FormGroup, InputGroup, Button, Tooltip, Intent } from '@blueprintjs/core';

import PasswordInput from '../../../components/_forms/PasswordInput';

import { promiseListener } from '../../../redux/configureStore';
import { createNewUser } from '../../../redux/ducks/dashboard/newUser';
import { composeValidators, required, mustBeEmail, minLength, maxLength } from '../../../utils/formValidators';


const NewUserForm = (props) => {
  return (
    <MakeAsyncFunction
      listener={promiseListener}
      start={createNewUser.REQUEST}
      resolve={createNewUser.SUCCESS}
      reject={createNewUser.FAILURE}>
      {(onSubmit) => (
        <Form
          onSubmit={onSubmit}
          initialValues={props.initialValues}
          render={({ handleSubmit, submitting, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field 
                name="email"
                validate={composeValidators(required, mustBeEmail)}>
                {({ input, meta }) => (
                  <FormGroup
                    label="E-mail"
                    labelInfo="(required)"
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <InputGroup
                        type="email" 
                        placeholder="enter email"
                        large
                        intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                        {...input}/>
                    </Tooltip>
                  </FormGroup>
                )}
              </Field>

              <Field 
                name="login"
                validate={composeValidators(required)}>
                {({ input, meta }) => (
                  <FormGroup
                    label="Login"
                    labelInfo="(required)"
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <InputGroup
                        type="text"
                        placeholder="enter login"
                        large
                        intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                        {...input}/>
                    </Tooltip>
                  </FormGroup>
                )}
              </Field>

              <Field 
                name="sub"
                validate={composeValidators(required)}>
                {({ input, meta }) => (
                  <FormGroup
                    label="Sub"
                    labelInfo="(required)"
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <InputGroup
                        type="text" 
                        placeholder="enter sub"
                        large
                        intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                        {...input}/>
                    </Tooltip>
                  </FormGroup>
                )}
              </Field>

              <Field 
                name="scope">
                {({ input, meta }) => (
                  <FormGroup
                    label="Scope"
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <InputGroup
                        type="text" 
                        placeholder="enter scope"
                        large
                        intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}
                        {...input}/>
                    </Tooltip>
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
                    intent={meta.touched && meta.error ? Intent.DANGER : Intent.NONE}>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <PasswordInput
                        placeholder="enter password"
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
                text="Submit"
                intent={Intent.PRIMARY}
                loading={submitting}
                disabled={invalid || pristine}/>
            </form>
          )}/>
      )}
    </MakeAsyncFunction>
  );
};

export default NewUserForm;