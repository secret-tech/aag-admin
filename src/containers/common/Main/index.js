import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';

import CustomRoute from '../../../components/common/CustomRoute';
import AppWrapper from '../AppWrapper';
import AuthWrapper from '../AuthWrapper';

import * as routes from '../../../routes';
import s from './styles.module.css';

const cx = classnames.bind(s);

const Main = () => {
  return (
    <div className={cx('bp3-dark')}>
      <Switch>
        <CustomRoute path={routes.AUTH} redirectRoute={routes.USERS} component={AuthWrapper}/>
        <CustomRoute reqToken redirectRoute={routes.SIGN_IN} component={AppWrapper}/>
      </Switch>
    </div>
  );
}

export default withRouter(Main);
