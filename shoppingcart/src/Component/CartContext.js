import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  countCart: 0,
  setCart: () => {},
  setCountCart: () => {},
  addToCart: () => {},
});

export default CartContext;
