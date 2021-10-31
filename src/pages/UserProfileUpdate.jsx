import * as React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import Form from "../components/Form";
import Column from "../components/Column";
import Button from "../components/Button";
import {UserContext} from "../contexts";
import Notification from "../utils/notification";
import ErrorHandler from "../utils/errorHandler";
import account from "../utils/requests/account";

class UserProfileUpdate extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  componentDidMount() {
    this.context.loadOrRefreshUser();
    this.setState({ email: this.context.user?.email || "" });
  }

  async updateEmail() {
    try {
      await account.updateEmail(this.state.email);
      this.context.loadOrRefreshUser();
      Notification.showSuccess("Email updated successfully");
    } catch (e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  async updatePassword() {
    const password = document.getElementById("password").value;
    try {
      await account.updatePassword(password);
      this.context.loadOrRefreshUser();
      Notification.showSuccess("Password updated successfully");
    } catch (e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  render() {
    return (
      <Row className="content-container">
        <Column span="offset-by-two eight">
          <Row>
            <Form title="Update Profile">
              <Row>
                <Input type="email" placeholder="Email" span="eight" value={this.state.email}
                       onChange={(event) => this.setState({ email: event.target.value })}/>
                <Button span="four" onClick={() => this.updateEmail()}>Update Email</Button>
              </Row>
              <Row><Input type="password" placeholder="Password" span="eight"/></Row>
              <Row>
                <Input type="password" placeholder="Confirm Password" span="eight"/>
                <Button span="four" onClick={() => this.updatePassword()}>Update Password</Button>
              </Row>
            </Form>
          </Row>
        </Column>
      </Row>
    );
  }
}

export default UserProfileUpdate;