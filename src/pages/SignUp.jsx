import * as React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import Form from "../components/Form";
import Column from "../components/Column";
import {Link} from "react-router-dom";
import Routes from "../widgets/Routes";
import Button from "../components/Button";

class SignUp extends React.Component {
  defaultProps = {
    // title: "",
    className: "",
  };

  render() {
    // const props = {...this.defaultProps, ...this.props};
    return (
        <Row className="screen-centered-wrapper">
          <Column>
            <Form title="Sign up">
              <Row><Input type="email" label="Email" placeholder="myemail@example.com"/></Row>
              <Row><Input type="password" placeholder="Password"/></Row>
              <Row><Button>SIGN UP</Button></Row>
            </Form>
            <Row className="centered"><Link to={Routes.SIGN_IN}>Sign in</Link></Row>
          </Column>
        </Row>
    );
  }
}

export default SignUp;