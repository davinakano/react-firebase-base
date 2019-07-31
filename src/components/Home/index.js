import React from 'react';
import { withAuthorization } from '../Session';

const condition = authUser => !!authUser;

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>This can be accessed by every signed in user</p>
  </div>
);

export default withAuthorization(condition)(HomePage);
