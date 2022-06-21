import React from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = () => {
  
  const { cartCount } = React.useContext(CartContext);

  
  
  return <div>
    <h2>Items in Cart: {cartCount}</h2>
    </div>;
};

export default ProductItem;
