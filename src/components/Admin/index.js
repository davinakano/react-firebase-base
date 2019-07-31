import React from 'react';
import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';

const condition = authUser => authUser && authUser.roles && !!authUser.roles[ROLES.ADMIN];

const AdminPage = () => (
  <div>
    <h1>Admin Page</h1>
    <p>Only admin users can see this.</p>
  </div>
);

export default withAuthorization(condition)(AdminPage);