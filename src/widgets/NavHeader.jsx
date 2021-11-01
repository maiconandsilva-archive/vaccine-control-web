import * as React from "react";
import Routes from "./Routes";
import NavBar from "../components/Nav";
import NavItem from "../components/NavItem";
import Button from "../components/Button";
import {UserContext} from "../contexts";
import {withRouter} from "react-router-dom";
import {isUserAuthenticated} from "../utils/data";
import users from "../utils/requests/users";

class NavHeader extends React.Component {
  static contextType = UserContext;

  showSignInButton() {
    console.log(this.props.location.pathname);
    return (
        isUserAuthenticated() || this.props.location.pathname === Routes.SIGN_IN
    ) ? "hidden" : "";
  }

  showSignUpButton() {
    return (
        isUserAuthenticated() || this.props.location.pathname !== Routes.SIGN_IN
    ) ? "hidden" : "";
  }

  showSignOutButton() {
    return !isUserAuthenticated() ? "hidden" : "";
  }

  render() {
    console.log(`User TYPE: ${this.context.user.type}`)
    return (
        <header>
          <NavBar>
            <NavItem to="/" className="home-link">VAX MNGR.</NavItem>
            <NavItem to={Routes.USER_PROFILE} className="highlighted">Profile</NavItem>
            <NavItem to={Routes.VACCINATION} className="highlighted">Vaccination</NavItem>
            {this.context.user.type === users.USER_TYPE_ENUM.admin &&
              <>
                <NavItem to={Routes.VACCINES} className="highlighted">Vaccines</NavItem>
                <NavItem to={Routes.USER_MANAGEMENT} className="highlighted">Users</NavItem>
              </>
            }
            <NavItem to={Routes.SIGN_IN} className={`nav-link-right ${this.showSignInButton()}`}>
              <Button className="">Sign in</Button>
            </NavItem>
            <NavItem to={Routes.SIGN_UP} className={`nav-link-right ${this.showSignUpButton()}`}>
              <Button className="">Sign up</Button>
            </NavItem>
            <NavItem to={Routes.SIGN_OUT} className={`nav-link-right ${this.showSignOutButton()}`}>
                <button onClick={() => this.context.clearUser()}>Sign out</button>
            </NavItem>
          </NavBar>
        </header>
    );
  }
}

export default withRouter(NavHeader);