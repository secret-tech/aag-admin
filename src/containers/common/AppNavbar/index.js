import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Button, Alignment } from '@blueprintjs/core';

import { signOut } from '../../../redux/ducks/auth/signOut';

const AppNavbar = (props) => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>secret_tech's Auth</Navbar.Heading>
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT}>
        <Button minimal icon="power" onClick={() => props.signOut()}/>
      </Navbar.Group>
    </Navbar>
  );
};

export default connect(
  null,
  {
    signOut
  }
)(AppNavbar);