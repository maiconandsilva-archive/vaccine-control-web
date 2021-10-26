import * as React from "react";
import Row from "../../components/Row";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Form from "../../components/Form";
import Column from "../../components/Column";

class UserManagement extends React.Component {
  defaultProps = {
    // title: "",
    className: "",
  };

  render() {
    // const props = {...this.defaultProps, ...this.props};
    return (
        <>
          <Row className="">
            <Column span="twelve">
              <Form title="Vaccines">
                <Row>
                  <Input span="five" placeholder="Name"/>
                  <Input span="four" placeholder="Manufacturer"/>
                  <Button span="three">Create</Button>
                </Row>
              </Form>
            </Column>
          </Row>
          <Row className="centered">
            <table className="u-full-width">
              <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Location</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Dave Gamache</td>
                <td>26</td>
                <td>Male</td>
                <td>San Francisco</td>
              </tr>
              <tr>
                <td>Dwayne Johnson</td>
                <td>42</td>
                <td>Male</td>
                <td>Hayward</td>
              </tr>
              </tbody>
            </table>
          </Row>
        </>
    );
  }
}

export default UserManagement;