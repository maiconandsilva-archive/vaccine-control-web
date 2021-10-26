import * as React from "react";

class Row extends React.Component {
  defaultProps = {
    className: "",
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return <div className={`row ${props.className}`}>{this.props.children}</div>;
  }
}

export default Row;