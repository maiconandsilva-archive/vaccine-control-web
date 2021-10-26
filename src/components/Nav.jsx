import * as React from "react";
import Container from "./Container";

class Nav extends React.Component {
  defaultProps = {
    className: "",
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return (
        <nav className={props.className}>
          <Container>
            {this.props.children}
          </Container>
        </nav>
    );
  }
}

export default Nav;