import React from 'react';
import { Switch, withRouter } from 'react-router-dom';

import CustomRoute from '../../../components/common/CustomRoute';
import AppWrapper from '../AppWrapper';
import AuthWrapper from '../AuthWrapper';

import * as routes from '../../../routes';

const Main = () => {
  return (
    <Switch>
      <CustomRoute path={routes.AUTH} redirectRoute={routes.USERS} component={AuthWrapper}/>
      <CustomRoute reqToken redirectRoute={routes.SIGN_IN} component={AppWrapper}/>
    </Switch>
  );
}

export default withRouter(Main);
