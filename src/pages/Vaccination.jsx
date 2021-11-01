import * as React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import Form from "../components/Form";
import Column from "../components/Column";
import Button from "../components/Button";
import Select from "../components/Select";
import ErrorHandler from "../utils/errorHandler";
import {AxiosResponse} from "axios";
import vaccination from "../utils/requests/vaccination";
import vaccine from "../utils/requests/vaccine";

class Vaccination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccines: [],
      vaccination: [],
      selectedVaccine: {},
    }
  }

  async componentDidMount() {
    try {
      const vaccineResponse = await vaccine.getAll();
      const vaccinationResponse = await vaccination.getAll();
      this.setState({
        vaccines: vaccineResponse.data.vaccines,
        vaccination: vaccinationResponse.data.vaccination,
      });
    } catch(e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  async registerVaccination() {
    try {
      const vaccineId = this.state.selectedVaccine;
      const lot = document.getElementById("lot").value;
      const date = document.getElementById("application-date").value;
      const response: AxiosResponse = await vaccination.create({ lot, date, vaccineId });
      this.setState({
        vaccination: [response.data.vaccination, ...this.state.vaccination],
      });
    } catch (e) {
      ErrorHandler.handleRequestError(e);
    }
  }

  render() {
    const {vaccines, vaccination, selectedVaccine} = this.state;

    return (
      <Row className="content-container">
        <Column span="offset-by-one ten">
          <Row>
            <Form title="Vaccination" className="title">
              <Row>
                <Select span="five" label="VACCINE" value={selectedVaccine} items={
                  vaccines.reduce((options, vaccine) => {
                    // options[vaccine.id] = `${vaccine.name} - ${vaccine.manufacturer}`;
                    options[vaccine.id] = vaccine.name;
                    return options;
                  }, {})} onChange={(event) => this.setState({ selectedVaccine: event.target.value })}/>
                <Input span="three" label="LOT" placeholder="XXNNXNNNXXX-N"/>
                <Input span="four" label="APPLICATION DATE" type="date"/>
              </Row>
              <Row>
                <Button onClick={() => this.registerVaccination()}>Register</Button>
              </Row>
            </Form>
          </Row>
          <Row>
            {vaccination.length !== 0 ?
              <table className="u-full-width">
                <tbody>
                  {vaccination.map((vaccinationRecord, index) => {
                    const vaccine = vaccines.find(vaccine => vaccine.id === vaccinationRecord.vaccineId);
                    return (
                      <tr key={index}>
                        <td className="five w-columns">{vaccine.name}</td>
                        <td className="four w-columns">{vaccinationRecord.lot}</td>
                        <td className="three w-columns">{vaccinationRecord.date}</td>
                        {/*<td className="one w-columns">*/}
                        {/*  <Input type="button" value="Edit"/>*/}
                        {/*</td>*/}
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

export default Vaccination;