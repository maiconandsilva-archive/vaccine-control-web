import './theme/main.scss';
import SignIn from "./pages/SignIn";
import * as React from "react";
import NavHeader from "./widgets/NavHeader";
import {BrowserRouter} from "react-router-dom";
import Routes from "./widgets/Routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavHeader/>
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
