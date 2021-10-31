import * as React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import Form from "../components/Form";
import Column from "../components/Column";
import {Link} from "react-router-dom";
import Routes from "../widgets/Routes";
import Button from "../components/Button";
import ErrorHandler from "../utils/errorHandler";
import account from "../utils/requests/account";
import Notification from "../utils/notification"

class SignUp extends React.Component {
  async signUp() {
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      await account.signup({ email, password, });
      this.props.history.push(Routes.SIGN_IN);
      Notification.showSuccess("Account created successfully");
    } catch (e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  render() {
    return (
      <Row className="screen-centered-content">
        <Column span="eight">
          <Row>
            <Form title="Sign up">
              <Row><Input type="email" placeholder="Email"/></Row>
              <Row><Input type="password" placeholder="Password"/></Row>
              <Row><Input type="password" placeholder="Password Confirmation"/></Row>
              <Row><Button onClick={() => this.signUp()}>SIGN UP</Button></Row>
            </Form>
          </Row>
          <Row className="centered">
            <Link to={Routes.SIGN_IN}>Already have an account? Sign in!</Link>
          </Row>
        </Column>
      </Row>
    );
  }
}

export default SignUp;