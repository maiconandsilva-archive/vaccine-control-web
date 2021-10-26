import * as React from "react";
import Row from "./Row";

class Form extends React.Component {
  defaultProps = {
    className: "",
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return (
        <form className={props.className} {...props}>
          <Row><h4 className="centered">{props.title}</h4></Row>
          {props.children}
        </form>
    );
  }
}

export default Form;