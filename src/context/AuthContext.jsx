import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const handleLogin = async (user) => {
    console.log(user);
    await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    })
    .then((res)=>{
      if(res.status===200) setIsAuth(true);
    })
   };

  const toggleAuth = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{isAuth,toggleAuth,handleLogin}}>
      {children}
    </AuthContext.Provider>
  );

  }

