import "./theme/main.scss";
import * as React from "react";
import NavHeader from "./widgets/NavHeader";
import {BrowserRouter} from "react-router-dom";
import Routes from "./widgets/Routes";
import {UserContext} from "./contexts";
import requests from "./utils/requests";
import account from "./utils/requests/account";
import ErrorHandler from "./utils/errorHandler";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.loadOrRefreshUser = this.loadOrRefreshUser.bind(this)
    this.clearUser = this.clearUser.bind(this)
  }

  async componentDidMount() {
    // get and set currently logged in user to state
    await this.loadOrRefreshUser();
  }

  async loadOrRefreshUser() {
    const token = localStorage.getItem("token");
    if (token != null) {
      try {
        const response = await account.getUser();
        this.setState({user: response.data});
      } catch(e) {
        localStorage.clear();
        // ErrorHandler.handleRequestError(e);
      }
    }
  }

  clearUser() {
    this.setState({ user: {} });
  }

  render() {
    const value = {
      user: this.state.user,
      loadOrRefreshUser: this.loadOrRefreshUser,
      clearUser: this.clearUser,
    };

    return (
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <NavHeader/>
          <Routes/>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}

export default App;
