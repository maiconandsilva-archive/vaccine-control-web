import * as React from "react";
import Row from "./Row";

class Form extends React.Component {
  static defaultProps = {
    className: "",
  };

  render() {
    const props = {...Form.defaultProps, ...this.props};
    return (
      <div className={props.className} {...props}>
        <Row><h4 className="centered">{props.title}</h4></Row>
        {props.children}
      </div>
    );
  }
}

export default Form;