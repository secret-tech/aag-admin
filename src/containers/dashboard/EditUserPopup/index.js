import React from 'react';
import { connect } from 'react-redux';
import { Dialog, Classes } from '@blueprintjs/core';

import NewUserForm from '../../../components/dashboard/NewUserForm';

import { closeEditUserPopup } from '../../../redux/ducks/dashboard/editUser';

const EditUserPopup = (props) => {
  console.log(props);
  return (
    <Dialog
      className="bp3-dark"
      style={{ width: '400px' }}
      isOpen={props.open}
      onClose={() => props.closeEditUserPopup()}>
      <div className={Classes.DIALOG_BODY}>
        <NewUserForm
          initialValues={props.initialValues}/>
      </div>
    </Dialog>
  );
};

export default connect(
  (state) => ({
    ...state.dashboard.editUser
  }),
  {
    closeEditUserPopup
  }
)(EditUserPopup);