import React from "react";

const UserContext = React.createContext({userName: '', setUserName: (userName: string) => {}});

export default UserContext;