import React, { createContext } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  
  const [cartCount, setCartCount] = React.useState();
  
  const getCartCount= async ()=>{
      await fetch(`http://localhost:8080/cartItems`)
      .then((res)=> res.json())
      .then((res)=> setCartCount(res.length))
  }

  return <CartContext.Provider value ={{cartCount,getCartCount}} 
  
  >{children}</CartContext.Provider>;
};
