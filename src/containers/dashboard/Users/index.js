import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HTMLTable } from '@blueprintjs/core';

import UserPopup from '../UserPopup';

import { fetchUsers } from '../../../redux/ducks/dashboard/users';
import { openUserPopup } from '../../../redux/ducks/dashboard/userPopup';

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props);
    return (
      <>
        <HTMLTable condensed interactive>
          <thead>
            <tr>
              <th>email</th>
              <th>reg date</th>
              <th>scope</th>
              <th>sub</th>
              <th>role</th>
              <th>last activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>amazing.space.invader@gmail.com</td>
              <td>13 Nov 2018 14:33:21</td>
              <td>???</td>
              <td>???</td>
              <td>admin</td>
              <td>13 Nov 2018 14:35:39</td>
            </tr>
            <tr>
              <td>hlogeon1@yandex.ru</td>
              <td>13 Nov 2018 14:33:21</td>
              <td>???</td>
              <td>???</td>
              <td>admin</td>
              <td>13 Nov 2018 14:35:39</td>
            </tr>
            <tr>
              <td>veryfuckinglongemailommmmmgggg@yandex.ru</td>
              <td>13 Nov 2018 14:33:21</td>
              <td>???</td>
              <td>???</td>
              <td>admin</td>
              <td>13 Nov 2018 14:35:39</td>
            </tr>
          </tbody>
        </HTMLTable>
  
        <UserPopup/>
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
    fetchUsers
  }
)(Users);
