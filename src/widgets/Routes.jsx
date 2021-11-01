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
import ProtectedRoute from "./ProtectedRoute";
import users from "../utils/requests/users";

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
          <ProtectedRoute exact path={Routes.VACCINATION} component={Vaccination}/>
          <ProtectedRoute exact path={Routes.USER_PROFILE} component={UserProfile}/>
          <ProtectedRoute exact path={Routes.USER_PROFILE_UPDATE} component={UserProfileUpdate}/>
          <ProtectedRoute exact path={Routes.VACCINES} component={Vaccines}
                          allowedTypes={[users.USER_TYPE_ENUM.admin]}/>
          <ProtectedRoute exact path={Routes.USER_MANAGEMENT} component={UserManagement}
                          allowedTypes={[users.USER_TYPE_ENUM.admin]}/>
          <Route exact path={Routes.SIGN_OUT} component={SignOut}/>
          {/*<Route component={Error}/>*/}
        </Switch>
      </Container>
    );
  }
}

export default Routes;