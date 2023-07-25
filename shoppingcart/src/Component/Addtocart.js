import React, { useState, useContext } from "react";
import CartContext from "./CartContext";

function AddToCart({ category, product }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  // Use context to get the methods and data needed from the provider
  const { setCart, setCountCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (category === "wetsuits" && !size) {
      return;
    }

    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      ...(category === "wetsuits" && { size: size }),
    };

    setCart((prevCart) => [...prevCart, newCartItem]);
    setCountCart((prevCount) => prevCount + quantity);

    setQuantity(1);
    setSize("");
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const isAddToCartDisabled = category === "wetsuits" && !size;

  return (
    <>
      <div className="options">
        {category === "wetsuits" && (
          <div>
            <p>Size</p>
            <input
              type="radio"
              id="small"
              name="size"
              value="small"
              checked={size === "small"}
              onChange={handleSizeChange}
            />
            <label htmlFor="small">S</label>
            <input
              type="radio"
              id="medium"
              name="size"
              value="medium"
              checked={size === "medium"}
              onChange={handleSizeChange}
            />
            <label htmlFor="medium">M</label>
            <input
              type="radio"
              id="large"
              name="size"
              value="large"
              checked={size === "large"}
              onChange={handleSizeChange}
            />
          </div>
        )}
        <p>Quantity</p>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1" // Setting min value to 1 to avoid negative quantities
        />
        <p>Add To Cart</p>
        <button onClick={handleAddToCart} disabled={isAddToCartDisabled}>
          +
        </button>
      </div>
    </>
  );
}

export default AddToCart;
