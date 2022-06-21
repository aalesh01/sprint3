import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ProductItem from "./ProductItem";

const Navbar = () => {

  const {isAuth,toggleAuth} = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <Link to={isAuth ? "/" : "/login" }>Home</Link>
        {isAuth ? <ProductItem/>: "" }
        <Link onClick={toggleAuth} to="/">{isAuth ? "Logout" : "Login"}</Link>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
