import * as React from "react";
import Column from "./Column";

class Input extends React.Component {
  defaultProps = {
    label: "",
    type: "text",
    span: "twelve",
    className: "u-full-width",
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return (
      <Column span={props.span}>
        { props.label && <label htmlFor={props.label.toLowerCase()}>{props.label}</label> }
        <input id={props.label.toLowerCase() || props.id || props.placeholder?.toLowerCase()}
               type={props.type} placeholder={props.placeholder} className={props.className}/>
      </Column>
    );
  }
}

export default Input;