import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../../../utils/auth';

/* If reqToken === true app check jwt and if user have it, app returns wrapped component. 
 * Else app redirect user to redirectRoute.
 * 
 * If reqToken === false app check jwt and of user doesn't have it, app returns wrapped component.
 * Else app redirect user to redirectRoute.
 */

const CustomRoute = (props) => {
  const {
    component: Component,
    reqToken,
    redirectRoute,
    ...restProps
  } = props;

  const render = (renderProps) => {
    if (reqToken) {
      return getToken()
        ? <Component {...renderProps}/>
        : <Redirect to={redirectRoute}/>
    } else {
      return getToken()
        ? <Redirect to={redirectRoute}/>
        : <Component {...renderProps}/>
    }
  }

  return (
    <Route {...restProps} render={render}/>
  );
};

export default CustomRoute;