import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppNavbar from '../AppNavbar';
import Users from '../../dashboard/Users';

import * as routes from '../../../routes';

const AppWrapper = () => {
  return (
    <>
      <AppNavbar/>

      <Switch>
        <Route exact path={routes.USERS} component={Users}/>
        
        <Redirect exact from="/" to={routes.USERS}/>
      </Switch>
    </>
  );
};

export default AppWrapper;