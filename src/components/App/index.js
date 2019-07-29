import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import Navigation from '../Navigation';

import LandingPage from '../Landing';
import SignUpPage from '../SignUp';

import * as ROUTES from '../../constants/routes';

const App = (props) => {
  const [authUser, setAuthUser] = React.useState(null);

  // If there are changes on authUser, set it in the State
  React.useEffect(() => {
    const listener = props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ?  setAuthUser(authUser)
        :  setAuthUser(null)
    });

    // equivalent to componentWillUnmount
    return () => {
      listener();
    }
  }, [authUser, props.firebase.auth]);

  return (
    <Router>
      <Navigation authUser={authUser}/>

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage}/>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
    </Router>
  )
}

export default withFirebase(App);