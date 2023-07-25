import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [countCart, setCountCart] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCountCart((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider
      value={{ cart, countCart, setCart, setCountCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
