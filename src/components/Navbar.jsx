import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const {isAuth} = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <h1><Link to={isAuth ? "/" : "/login" }>Home</Link></h1>
        <h1><Link to="/">Logout</Link></h1>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
