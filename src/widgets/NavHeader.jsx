import * as React from "react";
import {NavLink, Router, Switch, Route, BrowserRouter} from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Routes from "./Routes";
import Container from "../components/Container";
import NavBar from "../components/Nav";
import NavItem from "../components/NavItem";

class NavHeader extends React.Component {
  defaultProps = {
    // title: "",
    className: "",
  };

  render() {
    // const props = {...this.defaultProps, ...this.props};
    return (
        <header className="App-header">
          <NavBar>
            <NavItem to={Routes.SIGN_IN}>Sign in</NavItem>
            <NavItem to={Routes.SIGN_UP}>Sign up</NavItem>
            <NavItem to={Routes.USER_PROFILE}>Profile</NavItem>
            <NavItem to={Routes.VACCINATION}>Vaccination</NavItem>
            <NavItem to={Routes.VACCINES}>Vaccines</NavItem>
            <NavItem to={Routes.USER_MANAGEMENT}>Users</NavItem>
            <NavItem to={Routes.SIGN_OUT}>Sign out</NavItem>
          </NavBar>
        </header>
    );
  }
}

export default NavHeader;