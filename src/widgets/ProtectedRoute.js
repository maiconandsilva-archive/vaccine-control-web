import React from "react";
import {Route, Redirect} from "react-router-dom";
import {UserContext} from "../contexts";
import users from "../utils/requests/users";
import Routes from "./Routes";

class ProtectedRoute extends React.Component {
  static contextType = UserContext;
  static defaultProps = {
    allowedTypes: Object.entries(users.USER_TYPE_ENUM).map(([key, _]) => key),
  };

  render() {
    const {user} = this.context;
    const {
      component: Component, redirectTo, allowedTypes, path, ...props
    } = this.props;

    if (user.email && !allowedTypes.includes(user?.type)) {
      return (
        <Route path={path}>
          <Redirect to={redirectTo || Routes.SIGN_IN} from={path}/>
        </Route>
      );
    }
    return <Route path={path} component={Component} {...props}/>;
  }
}

export default ProtectedRoute;