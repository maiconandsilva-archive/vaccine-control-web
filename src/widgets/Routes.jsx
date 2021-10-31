import * as React from "react";
import {Switch, Route} from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Container from "../components/Container";
import UserProfile from "../pages/UserProfile";
import Vaccination from "../pages/Vaccination";
import Vaccines from "../pages/admin/Vaccines";
import SignOut from "../pages/SignOut";
import UserManagement from "../pages/admin/UserManagement";
import UserProfileUpdate from "../pages/UserProfileUpdate";

class Routes extends React.Component {
  static SIGN_IN = "/signin";
  static SIGN_UP = "/signup";
  static SIGN_OUT = "/signout";
  static USER_PROFILE = "/profile";
  static VACCINATION = "/vaccination";
  static VACCINES = "/admin/vaccines";
  static USER_MANAGEMENT = "/admin/users";
  static USER_PROFILE_UPDATE = "/profile/update";

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path={Routes.SIGN_IN} component={SignIn}/>
          <Route exact path={Routes.SIGN_UP} component={SignUp}/>
          <Route exact path={Routes.VACCINATION} component={Vaccination}/>
          <Route exact path={Routes.USER_PROFILE} component={UserProfile}/>
          <Route exact path={Routes.USER_PROFILE_UPDATE} component={UserProfileUpdate}/>
          <Route exact path={Routes.VACCINES} component={Vaccines}/>
          <Route exact path={Routes.USER_MANAGEMENT} component={UserManagement}/>
          <Route exact path={Routes.SIGN_OUT} component={SignOut}/>
          {/*<Route component={Error}/>*/}
        </Switch>
      </Container>
    );
  }
}

export default Routes;