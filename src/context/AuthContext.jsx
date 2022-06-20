import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isAuth, setIsAuth] = React.useState(false);

  const handleLogin = async () => {
    await fetch(`https://reqres.in/api/login`)
    .then(setIsAuth(true));
  };

  const toggleAuth = ()=>{
      setIsAuth(false);
  }

  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>;
};
