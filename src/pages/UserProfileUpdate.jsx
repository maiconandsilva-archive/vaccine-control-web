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
import {Link} from "react-router-dom";
import Routes from "../widgets/Routes";

class UserProfileUpdate extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  async componentDidMount() {
    await this.context.loadOrRefreshUser();
    this.setState({ email: this.context.user?.email || "" });
  }

  async updateEmail() {
    try {
      await account.updateEmail(this.state.email);
      await this.context.loadOrRefreshUser();
      Notification.showSuccess("Email updated successfully");
    } catch (e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  async updatePassword() {
    const password = document.getElementById("password").value;
    try {
      await account.updatePassword(password);
      await this.context.loadOrRefreshUser();
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
            <Column span="nine"><h4 className="title">Profile</h4></Column>
            <Column span="three">
              <Link to={Routes.USER_PROFILE} className="button u-full-width">Go back</Link>
            </Column>
          </Row>
          <Row>
            <Form>
              <Row>
                <Input span="eight" type="email" placeholder="Email" value={this.state.email}
                       onChange={(event) => this.setState({ email: event.target.value })}/>
                <Button span="four" onClick={() => this.updateEmail()}>Update Email</Button>
              </Row>
              <Row><Input span="eight" type="password" placeholder="Password"/></Row>
              <Row>
                <Input span="eight" type="password" placeholder="Confirm Password"/>
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