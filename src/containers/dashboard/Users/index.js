import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HTMLTable, Button, Tooltip, Intent } from '@blueprintjs/core';

import NewUserPopup from '../NewUserPopup';
import UserPopup from '../UserPopup';
import SearchForm from '../../../components/dashboard/SearchForm';

import { fetchUsers } from '../../../redux/ducks/dashboard/users';
import { openNewUserPopup } from '../../../redux/ducks/dashboard/newUser';
import { openUserPopup } from '../../../redux/ducks/dashboard/userPopup';

import s from './styles.module.css';

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const renderControls = (user) => (
      <div className={s.controls}>
        <Tooltip content="Edit user">
          <Button
            icon="edit"
            small
            minimal
            onClick={() => console.log('Edit user')}/>
        </Tooltip>

        <Tooltip content="Invalidate user's jwt">
          <Button
            icon="flame"
            small
            minimal
            onClick={() => console.log('Invalidate jwt')}/>
        </Tooltip>

        <Tooltip content="Delete user" intent={Intent.DANGER}>
          <Button
            icon="trash"
            small
            minimal
            intent={Intent.DANGER}
            onClick={() => console.log('Delete user')}/>
        </Tooltip>
      </div>
    );

    return (
      <>
        <div className={s.buttons}>
          <div className={s.create}>
            <Button
              intent={Intent.SUCCESS}
              text="Create new user"
              icon="plus"
              onClick={() => this.props.openNewUserPopup()}/>
          </div>

          <div className={s.search}>
            <SearchForm/>
          </div>
        </div>

        <HTMLTable interactive className={s.table}>
          <thead>
            <tr>
              <th>email</th>
              <th>reg date</th>
              <th>last activity</th>
              <th>sub</th>
              <th>scope</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>amazing.space.invader@gmail.com</td>
              <td>13 Nov 2018 14:33:21</td>
              <td>13 Nov 2018 14:35:39</td>
              <td>sub name</td>
              <td>admin</td>
              <td>{renderControls('user')}</td>
            </tr>
          </tbody>
        </HTMLTable>
  
        <UserPopup/>
        <NewUserPopup/>
      </>
    );
  }
}

export default connect(
  (state) => ({
    ...state.dashboard.users
  }),
  {
    openUserPopup,
    fetchUsers,
    openNewUserPopup
  }
)(Users);
