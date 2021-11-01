import * as React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import Form from "../components/Form";
import Column from "../components/Column";
import {Link} from "react-router-dom";
import Routes from "../widgets/Routes";
import Button from "../components/Button";
import {AxiosResponse} from "axios";
import {UserContext} from "../contexts";
import ErrorHandler from "../utils/errorHandler";
import account from "../utils/requests/account";

class SignIn extends React.Component {
  static contextType = UserContext;

  async signIn() {
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const response: AxiosResponse = await account.authenticate({ email, password });
      localStorage.setItem("token", response.data.token);
      await this.context.loadOrRefreshUser();
      this.props.history.push(Routes.VACCINATION);
    } catch (e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  render() {
    return (
      <Row className="screen-centered-content">
        <Column>
          <Form title="Sign in" className="title">
            <Row><Input type="email" placeholder="Email"/></Row>
            <Row><Input type="password" placeholder="Password"/></Row>
            <Row><Button onClick={() => this.signIn()}>SIGN IN</Button></Row>
          </Form>
          <Row className="centered">
            <Link to={Routes.SIGN_UP}>Don’t have an account? Sign up now!</Link>
          </Row>
        </Column>
      </Row>
    );
  }
}

export default SignIn;