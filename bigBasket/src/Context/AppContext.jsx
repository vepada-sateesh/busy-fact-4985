import React, { useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });
  const loginUser = (token) => {
    setState({
      ...state,
      isAuth: true,
      token,
    });
  };
  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };
  return (
    <AppContext.Provider value={{ authState: state, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
