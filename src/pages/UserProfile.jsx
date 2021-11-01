import * as React from "react";
import Row from "../components/Row";
import Column from "../components/Column";
import {UserContext} from "../contexts";
import {Link} from "react-router-dom";
import Routes from "../widgets/Routes";

class UserProfile extends React.Component {
  static contextType = UserContext;

  render() {
    const { user } = this.context;

    return (
      <Row className="content-container">
        <Column span="offset-by-two eight">
          <Row>
            <Column span="nine"><h4 className="title">Profile</h4></Column>
            <Column span="three">
              <Link to={Routes.USER_PROFILE_UPDATE} className="button u-full-width">Edit Profile</Link>
            </Column>
          </Row>
          <Row>
            <table className="u-full-width">
              <tbody>
                <tr>
                  <td className="info-title">Email</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td className="info-title">Type</td>
                  <td>{user.type}</td>
                </tr>
                <tr>
                  <td className="info-title">Creation Date</td>
                  <td>{user.createdAt}</td>
                </tr>
                <tr>
                  <td className="info-title">Updated Date</td>
                  <td>{user.updatedAt}</td>
                </tr>
              </tbody>
            </table>
          </Row>
        </Column>
      </Row>
    );
  }
}

export default UserProfile;