import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Users from '../../dashboard/Users';

import * as routes from '../../../routes';

const AppWrapper = () => {
  return (
    <div>
      <div>APP SPACE</div>
      <Switch>
        <Route exact path={routes.USERS} component={Users}/>
        
        <Redirect exact from="/" to={routes.USERS}/>
      </Switch>
    </div>
  );
};

export default AppWrapper;