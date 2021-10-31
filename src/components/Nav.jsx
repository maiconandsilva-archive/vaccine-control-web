import * as React from "react";
import Container from "./Container";

class Nav extends React.Component {
  static defaultProps = {
    className: "top-navbar",
  };

  render() {
    const props = {...Nav.defaultProps, ...this.props};
    return (
      <nav className={props.className}>
        <Container>{props.children}</Container>
      </nav>
    );
  }
}

export default Nav;