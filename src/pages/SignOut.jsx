import * as React from "react";
import {Redirect} from "react-router-dom";
import Routes from "../widgets/Routes";

class SignOut extends React.Component {
  defaultProps = {
    className: "",
  };

  render() {
    // TODO: Remove token from localStorage
    return <Redirect to={Routes.SIGN_IN}/>;
  }
}

export default SignOut;