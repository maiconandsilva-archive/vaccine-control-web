import * as React from "react";

class Column extends React.Component {
  defaultProps = {
    span: "six",
    className: "",
    children: <div style={{"display": "inline-block"}}/>
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return (
      <div className={`${props.span} columns ${props.className}`}>
        {props.children}
      </div>
    );
  }
}

export default Column;