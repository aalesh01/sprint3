import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import {AuthProvider} from "../src/context/AuthContext";
import { CartProvider } from "./context/CartContext";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <AuthProvider>
    <CartProvider>
    <ChakraProvider>
        <App />
    </ChakraProvider>
    </CartProvider>
    </AuthProvider>

);
