import React from 'react';
import { connect } from 'react-redux';
import { Dialog, Classes } from '@blueprintjs/core';

import NewUserForm from '../../../components/dashboard/NewUserForm';

import { closeNewUserPopup } from '../../../redux/ducks/dashboard/newUser';

const NewUserPopup = (props) => {
  return (
    <Dialog
      className="bp3-dark"
      style={{ width: '400px' }}
      isOpen={props.open}
      onClose={() => props.closeNewUserPopup()}>
      <div className={Classes.DIALOG_BODY}>
        <NewUserForm/>
      </div>
    </Dialog>
  );
};

export default connect(
  (state) => ({
    ...state.dashboard.newUser
  }),
  {
    closeNewUserPopup
  }
)(NewUserPopup);