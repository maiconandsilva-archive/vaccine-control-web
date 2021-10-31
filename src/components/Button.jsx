import * as React from "react";
import Column from "./Column";

class Button extends React.Component {
  static defaultProps = {
    span: "twelve",
    className: "u-full-width",
  };

  render() {
    const {span, className, children,...props} = {...Button.defaultProps, ...this.props};
    return (
      <Column span={span}>
        <button {...props} className={`button-primary ${className}`}>{children}</button>
      </Column>
    );
  }
}

export default Button;