export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), null);

const EMAIL_REGEXP = /^\S+@\S+\.\S+$/;

export const required = (value) => 
  (value ? null : 'Required');

export const mustBeNumber = (value) => 
  (isNaN(value) ? 'Must be a number' : null);

export const minLength = (min) => (value) => 
  value.length >= min ? null : `Length should be greater than ${min} chars`;

export const maxLength = (max) => (value) => 
  value.length <= max ? null : `Length should be lower than ${max} chars`;

export const mustBeEmail = (value) => 
  (EMAIL_REGEXP.test(value) ? null : 'Email incorrect');
