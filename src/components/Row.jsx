import * as React from "react";

class Row extends React.Component {
  static defaultProps = {
    className: "",
  };

  render() {
    const props = {...Row.defaultProps, ...this.props};
    return <div className={`row ${props.className}`}>{this.props.children}</div>;
  }
}

export default Row;