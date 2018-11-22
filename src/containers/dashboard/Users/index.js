import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HTMLTable, Button, Tooltip, InputGroup, Intent } from '@blueprintjs/core';
import { format } from 'date-fns';

import NewUserPopup from '../NewUserPopup';
import EditUserPopup from '../EditUserPopup';
import UserPopup from '../UserPopup';

import { fetchUsers } from '../../../redux/ducks/dashboard/users';
import { openNewUserPopup } from '../../../redux/ducks/dashboard/newUser';
import { openUserPopup } from '../../../redux/ducks/dashboard/userPopup';
import { openEditUserPopup } from '../../../redux/ducks/dashboard/editUser';

import s from './styles.module.css';

class Users extends Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(this.props.location.search);

    this.state = {
      q: params.get('q') || '',
      cursor: params.get('cursor') || '0'
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePaginate = this.handlePaginate.bind(this);
  }

  componentWillMount() {
    const { q, cursor } = this.state;
    this.props.fetchUsers({ q, cursor });
  }

  handleSearchChange(e) {
    this.setState({ q: e.target.value || '' });
  }

  handleSearch(e) {
    e.preventDefault();
    const { q } = this.state;

    const searchParams = new URLSearchParams();
    searchParams.set('q', q);

    this.props.history.push(`?${searchParams.toString()}`);
    this.props.fetchUsers({ q });
  }

  handlePaginate() {
    this.props.fetchUsers({ cursor: this.props.nextCursor });
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

    console.log(this.props);

    return (
      <>
        <div className={s.buttons}>
          <div className={s.left}>
            <Button
              intent={Intent.SUCCESS}
              text="Create new user"
              icon="plus"
              onClick={() => this.props.openNewUserPopup()}/>

            <Button
              minimal
              text="Next page"
              icon="arrow-right"
              onClick={() => this.handlePaginate()}/>
          </div>

          <div className={s.search}>
            <form onSubmit={this.handleSearch}>
              <InputGroup
                type="search" 
                placeholder="Enter login to search"
                value={this.state.q}
                onChange={this.handleSearchChange}
                rightElement={(
                  <Button
                    minimal
                    type="submit"
                    icon="search"/>
                )}/>
            </form>
          </div>
        </div>

        <HTMLTable interactive className={s.table}>
          <thead>
            <tr>
              <th className={s.wide}>login</th>
              <th className={s.wide}>email</th>
              <th>reg date</th>
              <th>last activity</th>
              <th>sub</th>
              <th>scope</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <td className={s.wide} alt={user.login}>{user.login}</td>
                <td className={s.wide} alt={user.email}>{user.email}</td>
                <td>{format(user.registrationDate, 'DD MMM YY | HH:mm:ss') || ''}</td>
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
