import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HTMLTable, Button, Tooltip, Intent } from '@blueprintjs/core';
import { format } from 'date-fns';

import NewUserPopup from '../NewUserPopup';
import EditUserPopup from '../EditUserPopup';
import UserPopup from '../UserPopup';
import SearchForm from '../../../components/dashboard/SearchForm';

import { fetchUsers } from '../../../redux/ducks/dashboard/users';
import { openNewUserPopup } from '../../../redux/ducks/dashboard/newUser';
import { openUserPopup } from '../../../redux/ducks/dashboard/userPopup';
import { openEditUserPopup } from '../../../redux/ducks/dashboard/editUser';

import s from './styles.module.css';

const USERS = [
  {
    id: '0x0',
    email: 'amazing.space.invader@gmail.com',
    login: 'amazing.space.invader_gmail.com',
    regdate: 1542214409000,
    lastActivity: 1542214434000,
    sub: 'subsub',
    scope: 'admin'
  },
  {
    id: '0x1',
    email: 'anotheremail@ggg.com',
    login: 'anotheremail_ggg.com',
    regdate: 1542214488000,
    lastActivity: 1542214494000,
    sub: 'subsub'
  },
  {
    id: '0x2',
    email: 'yoyoyo@yo.yo',
    login: 'yoyoyo_yo.yo',
    regdate: 1542214523000,
    lastActivity: 1542214529000,
    sub: 'subsub',
    scope: 'advisor'
  },
];

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
            onClick={() => this.props.openEditUserPopup(user)}/>
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
            {USERS.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{format(user.regdate, 'DD MMM YY | HH:mm:ss') || ''}</td>
                <td>{format(user.lastActivity, 'DD MMM YY | HH:mm:ss') || ''}</td>
                <td>{user.sub}</td>
                <td>{user.scope || ''}</td>
                <td>{renderControls(user)}</td>
              </tr>
            ))}
          </tbody>
        </HTMLTable>
  
        <UserPopup/>
        <NewUserPopup/>
        <EditUserPopup/>
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
    openNewUserPopup,
    openEditUserPopup
  }
)(Users);
