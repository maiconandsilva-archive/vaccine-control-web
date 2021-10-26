import * as React from "react";
import {NavLink} from "react-router-dom";
import Container from "./Container";

class NavItem extends React.Component {
  defaultProps = {
    className: "",
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return (
        <div>
          <NavLink to={props.to}>{props.children}</NavLink>
        </div>
    );
  }
}

export default NavItem;