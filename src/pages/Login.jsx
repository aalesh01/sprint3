import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";


const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const {handleLogin} = useContext(AuthContext);
  const {getCartCount} = useContext(CartContext)

  const handleChange = (e) => {
    const {name, value}  = e.target;
    setUser({...user,[name]:value});
  };

  const handleSubmit = () => {
    handleLogin(user);
    getCartCount();
  };

  return (
    <div>
      <FormControl style={{ width: "50%", margin: "auto" }}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input onChange={handleChange} id="email" name="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Button onClick={handleSubmit}>Login</Button>
      </FormControl>
    </div>
  );
};

export default Login;
