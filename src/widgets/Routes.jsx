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

class Routes extends React.Component {
  static SIGN_IN = "/signin";
  static SIGN_UP = "/signup";
  static SIGN_OUT = "/signout";
  static USER_PROFILE = "/profile";
  static VACCINATION = "/vaccination";
  static VACCINES = "/admin/vaccines";
  static USER_MANAGEMENT = "/admin/users";

  defaultProps = {
    // title: "",
    className: "",
  };

  render() {
    // const props = {...this.defaultProps, ...this.props};
    return (
      <Container>
        <Switch className="container">
          <Route exact path={Routes.SIGN_IN}>
            <SignIn/>
          </Route>
          <Route exact path={Routes.SIGN_UP}>
            <SignUp/>
          </Route>
          <Route exact path={Routes.VACCINATION}>
            <Vaccination/>
          </Route>
          <Route exact path={Routes.USER_PROFILE}>
            <UserProfile/>
          </Route>
          <Route exact path={Routes.VACCINES}>
            <Vaccines/>
          </Route>
          <Route exact path={Routes.USER_MANAGEMENT}>
            <UserManagement/>
          </Route>
          <Route exact path={Routes.SIGN_OUT}>
            <SignOut/>
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default Routes;