import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Button, Alignment } from '@blueprintjs/core';

import { signOut } from '../../../redux/ducks/auth/signOut';

import s from './styles.module.css';

const AppContainer = (props) => {
  return (
    <div className={s.container}>
      <div className={s.navbar}>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>secret_tech's Auth</Navbar.Heading>
          </Navbar.Group>

          <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider/>
            <Button minimal icon="power" onClick={() => props.signOut()}/>
          </Navbar.Group>
        </Navbar>
      </div>

      {props.children}
    </div>
  );
};

export default connect(
  null,
  {
    signOut
  }
)(AppContainer);