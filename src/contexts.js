import React from "react";

const UserContext = React.createContext({
    user: {},
    loadOrRefreshUser: () => {},
    clearUser: () => {},
});

export { UserContext };