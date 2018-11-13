import { Position, Toaster, Intent } from '@blueprintjs/core';

const toaster = Toaster.create({ position: Position.TOP });

export const error = (message) => toaster.show({
  intent: Intent.DANGER,
  icon: 'error',
  timeout: 10000,
  message
});

export default toaster;