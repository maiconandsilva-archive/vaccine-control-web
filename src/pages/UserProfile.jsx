import * as React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import Form from "../components/Form";
import Column from "../components/Column";
import Button from "../components/Button";

class UserProfile extends React.Component {
  defaultProps = {
    // title: "",
    className: "",
  };

  render() {
    // const props = {...this.defaultProps, ...this.props};
    return (
        <Row className="screen-centered-wrapper">
          <Column span="eight">
            <Form title="Profile">
              <Row>
                <Input type="email" span="eight" placeholder="Email"/>
                <Button span="four">Update Email</Button>
              </Row>
              <Row>
                <Input span="eight"  type="password" placeholder="Password"/>
                <Button span="four">Update Password</Button>
              </Row>
            </Form>
          </Column>
        </Row>
    );
  }
}

export default UserProfile;