import * as React from "react";
import {NavLink} from "react-router-dom";

class NavItem extends React.Component {
  static defaultProps = {
    activeClassName: "active",
    className: "",
  };

  render() {
    const props = {...NavItem.defaultProps, ...this.props};
    return (
      <NavLink to={props.to} activeClassName={props.activeClassName}
               className={`nav-link ${props.className}`}>
        {props.children}
      </NavLink>
    );
  }
}

export default NavItem;