import * as React from "react";

class Container extends React.Component {
  defaultProps = {
    className: "",
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return <div className={`container ${props.className}`}>{this.props.children}</div>;
  }
}

export default Container;