import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppContainer from '../AppContainer';
import Users from '../../dashboard/Users';

import * as routes from '../../../routes';

const AppWrapper = () => {
  return (
    <AppContainer>
      <Switch>
        <Route exact path={routes.USERS} component={Users}/>
        
        <Redirect exact from="/" to={routes.USERS}/>
      </Switch>
    </AppContainer>
  );
};

export default AppWrapper;