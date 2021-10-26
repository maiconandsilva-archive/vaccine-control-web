import * as React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import Form from "../components/Form";
import Column from "../components/Column";
import Button from "../components/Button";
import Select from "../components/Select";

class Vaccination extends React.Component {
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
            <Form title="Vaccination">
              <Row>
                <Select span="five" items={{OK: "OKa", NOK: "NOKa"}}/>
                <Input span="four" type="date" placeholder="11/22/225"/>
                <Button span="three">Register</Button>
              </Row>
              {/*<Row>*/}

              {/*</Row>*/}
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

export default Vaccination;