import * as React from "react";
import Row from "../../components/Row";
import Column from "../../components/Column";
import ErrorHandler from "../../utils/errorHandler";
import usersRequest from "../../utils/requests/users";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {copyObjectsArray} from "../../utils/data";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.unchangedUsers = [];
    this.state = {
      users: [],
      editable: false,
    }
  }

  async componentDidMount() {
    try {
      const response = await usersRequest.getAll();
      this.setState({
        users: response.data.users,
      });
      // Copy objects by value
      this.unchangedUsers = copyObjectsArray(this.state.users);
    } catch(e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  async save() {
    await usersRequest.update(this.state.users);
    this.unchangedUsers = copyObjectsArray(this.state.users);
    this.toggleEditing();
  }

  cancelEditing() {
    this.setState({
      users: copyObjectsArray(this.unchangedUsers),
    });
    this.toggleEditing();
  }

  toggleEditing() {
    this.setState({ editable: !this.state.editable });
  }

  isEditable() {
    return this.state.editable;
  }

  onUserTypeChange(event, row) {
    const usersTmp = [...this.state.users];
    usersTmp[row].type = event.target.value;

    this.setState({ users: usersTmp });
  }

  render() {
    const {users, editable} = this.state;

    return (
      <Row className="content-container">
        <Column span="offset-by-two eight">
          <Row>
            <Column span="twelve"><h4 className="title centered">Users</h4></Column>
          </Row>
          {users.length !== 0 ?
            <Row>
              {editable ?
                <Row>
                  <Input span="six" type="button" value="Cancel" className=""
                         onClick={() => this.cancelEditing()}/>
                  { editable &&
                    <Button span="six" style={{float: "right"}} className=""
                            onClick={() => this.save()}>Save</Button> }
                </Row>
                :
                <Row>
                  <Input style={{float: "right"}} type="button" span="twelve" value="Edit" className=""
                         onClick={() => this.toggleEditing()}/>
                </Row>
              }
              <table className="u-full-width">
                <thead>
                  <tr className="info-title">
                    <th>Email</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                {users.map((user, row) => {
                  return (
                    this.isEditable()?
                    <tr key={row}>
                      <td className="six w-columns">{user.email}</td>
                      <td className="five w-columns">
                        <Select value={user.type} items={usersRequest.USER_TYPE_ENUM}
                                onChange={(event) => this.onUserTypeChange(event, row)}/>
                      </td>
                    </tr>
                    :
                    <tr key={row}>
                      <td className="five w-columns">{user.email}</td>
                      <td className="four w-columns" style={{textTransform: "uppercase"}} >
                        {user.type}
                      </td>
                      {/*<td className="one w-columns">*/}
                      {/*  <Input type="button" value="Edit" onClick={() => this.toggleEditable(row)}/>*/}
                      {/*</td>*/}
                    </tr>
                  );
                })}
                </tbody>
              </table>
            </Row>
            : ""
          }
        </Column>
      </Row>
    );
  }
}

export default UserManagement;