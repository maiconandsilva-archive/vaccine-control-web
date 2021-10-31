import * as React from "react";
import Routes from "./Routes";
import NavBar from "../components/Nav";
import NavItem from "../components/NavItem";
import {UserContext} from "../contexts";

class NavHeader extends React.Component {
  render() {
    return (
        <header>
          <NavBar>
            <NavItem to="/" className="home-link">VAX MNGR.</NavItem>
            <NavItem to={Routes.USER_PROFILE} className="highlighted">Profile</NavItem>
            <NavItem to={Routes.VACCINATION} className="highlighted">Vaccination</NavItem>
            <NavItem to={Routes.VACCINES} className="highlighted">Vaccines</NavItem>
            <NavItem to={Routes.USER_MANAGEMENT} className="highlighted">Users</NavItem>
            {/*<NavItem to={Routes.SIGN_IN} className="nav-link-right">*/}
            {/*  <button className="button-primary">Sign in</button>*/}
            {/*</NavItem>*/}
            {/*<NavItem to={Routes.SIGN_UP} className="nav-link-right">*/}
            {/*  <button className="button-primary">Sign up</button>*/}
            {/*</NavItem>*/}
            <NavItem to={Routes.SIGN_OUT} className="nav-link-right">
              <UserContext.Consumer>
                {(ctx) => <button onClick={() => ctx.clearUser()}>Sign out</button>}
              </UserContext.Consumer>
            </NavItem>
          </NavBar>
        </header>
    );
  }
}

export default NavHeader;