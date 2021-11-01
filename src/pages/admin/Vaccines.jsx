import * as React from "react";
import Row from "../../components/Row";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import Column from "../../components/Column";
import {AxiosResponse} from "axios";
import ErrorHandler from "../../utils/errorHandler";
import vaccine from "../../utils/requests/vaccine";

class Vaccines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccines: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await vaccine.getAll();
      this.setState({
        vaccines: response.data.vaccines,
      });
    } catch(e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  async registerVaccine() {
    try {
      const name = document.getElementById("name").value;
      const manufacturer = document.getElementById("manufacturer").value;
      const response: AxiosResponse = await vaccine.create({ name, manufacturer });
      this.setState({
        vaccines: [response.data.vaccine, ...this.state.vaccines],
      });
    } catch (e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  render() {
    const { vaccines } = this.state;

    return (
      <Row className="content-container">
        <Column className="offset-by-one ten">
          <Row>
            <Form title="Vaccines" className="title">
              <Row>
                <Input span="five" placeholder="Name"/>
                <Input span="four" placeholder="Manufacturer"/>
                <Button span="three" onClick={() => this.registerVaccine()}>Create</Button>
              </Row>
            </Form>
          </Row>
          <Row className="centered">
            { vaccines.length !== 0 ?
              <table className="u-full-width">
                <thead>
                  <tr className="info-title">
                    <th>Name</th>
                    <th>Manufacturer</th>
                  </tr>
                </thead>
                <tbody>
                  { vaccines.map((vaccine, index) => {
                    return (
                      <tr key={index}>
                        <td>{vaccine.name}</td>
                        <td>{vaccine.manufacturer}</td>
                        {/*<td style={{textAlign: "right"}}><Input type="button" value="Edit"/></td>*/}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              : ""
            }
          </Row>
        </Column>
      </Row>
    );
  }
}

export default Vaccines;