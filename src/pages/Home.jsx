
import React from "react";
import Products from "../components/Products";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";

const Home = () => {

  const { isAuth } =React.useContext(AuthContext)
  return (
    <div>
      { isAuth ? <Products/> : <Login/> }
    </div>
  );
};

export default Home;
