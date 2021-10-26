import * as React from "react";
import Column from "./Column";

class Button extends React.Component {
  defaultProps = {
    span: "twelve",
    className: "u-full-width",
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return (
        <Column span={props.span}>
          <button {...props} className={`button-primary ${props.className}`}>{props.children}</button>
        </Column>
    );
  }
}

export default Button;