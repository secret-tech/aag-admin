import React from 'react';
import { connect } from 'react-redux';
import { Dialog, Classes } from '@blueprintjs/core';

import { closeUserPopup } from '../../../redux/ducks/dashboard/userPopup';

const UserPopup = (props) => {
  return (
    <Dialog
      className="bp3-dark"
      isOpen={props.open}
      onClose={() => props.closeUserPopup()}>
      <div className={Classes.DIALOG_BODY}>
        <h3>{props.user.email}</h3>
      </div>
    </Dialog>
  );
};

export default connect(
  (state) => ({
    ...state.dashboard.userPopup
  }),
  {
    closeUserPopup
  }
)(UserPopup);