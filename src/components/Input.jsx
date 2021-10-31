import * as React from "react";
import Column from "./Column";

class Input extends React.Component {
  static defaultProps = {
    type: "text",
    span: "twelve",
    className: "u-full-width",
  };

  render() {
    const {
      span, label, placeholder,
      type, value, className, id, ...props
    } = {...Input.defaultProps, ...this.props};
    return (
      <Column span={span}>
        { label && <label htmlFor={label?.toLowerCase()}>{label}</label> }
        <input id={label?.replace(" ", "-").toLowerCase() || id
                || placeholder?.replace(" ", "-").toLowerCase()} className={className}
             type={type} value={value} placeholder={placeholder} {...props}/>
      </Column>
    );
  }
}

export default Input;