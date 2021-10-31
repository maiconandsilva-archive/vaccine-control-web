import * as React from "react";

class Container extends React.Component {
  static defaultProps = {
    className: "",
  };

  render() {
    const props = {...Container.defaultProps, ...this.props};
    return <div className={`container ${props.className}`}>{this.props.children}</div>;
  }
}

export default Container;