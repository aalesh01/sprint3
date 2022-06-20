import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const Login = () => {
  return (
    <div>
      <FormControl style={{ width: "50%", margin: "auto" }}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input onChange="handleChange" id="email" name="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          onChange="handleChange"
          id="password"
          name="password"
          type="password"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Button>Login</Button>
      </FormControl>
    </div>
  );
};

export default Login;
