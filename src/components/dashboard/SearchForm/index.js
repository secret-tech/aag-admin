import React from 'react';
import MakeAsyncFunction from 'react-redux-promise-listener';
import { Form, Field } from 'react-final-form';
import { FormGroup, InputGroup, Button, Tooltip, Intent } from '@blueprintjs/core';

import { promiseListener } from '../../../redux/configureStore';
// import { createNewUser } from '../../../redux/ducks/dashboard/newUser';
import { composeValidators, required, mustBeEmail, minLength, maxLength } from '../../../utils/formValidators';


const SearchForm = () => {
  return (
    <MakeAsyncFunction
      listener={promiseListener}
      start={'createNewUser.REQUEST'}
      resolve={'createNewUser.SUCCESS'}
      reject={'createNewUser.FAILURE'}>
      {(onSubmit) => (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field 
                name="email"
                validate={composeValidators(required, mustBeEmail)}>
                {({ input, meta }) => (
                  <FormGroup>
                    <Tooltip
                      intent={Intent.DANGER}
                      targetTagName="div"
                      content={meta.touched && meta.error}
                      isOpen={meta.active && meta.touched && meta.error}>
                      <InputGroup
                        type="email" 
                        placeholder="Enter email to search"
                        {...input}
                        rightElement={(
                          <Button
                            minimal
                            icon="search"
                            loading={submitting}
                            disabled={invalid || pristine}/>
                        )}/>
                    </Tooltip>
                  </FormGroup>
                )}
              </Field>
            </form>
          )}/>
      )}
    </MakeAsyncFunction>
  );
};

export default SearchForm;