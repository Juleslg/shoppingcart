import React, { useState } from "react";
import products from "./ProductsData";

function AddToCart({
  category,
  selectedProductId,
  setCountCart,
  setCart,
  cart,
  setLastClicked,
}) {
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState(""); // Added state for the size selection
  const product = products.find((product) => product.id === selectedProductId);

  const handleAddToCart = () => {
    setLastClicked(Date.now());
    // If quantity is zero or negative, return early
    if (quantity <= 0) {
      return;
    }

    // If wetsuits category and size is not selected, return early
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

    // Check if product (with the same size if applicable) is already in the cart
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === newCartItem.id && (!size || item.size === size)
    );

    let updatedCart;
    if (existingCartItemIndex !== -1) {
      // Update quantity for existing product
      updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += quantity;
    } else {
      // Add new product to the cart
      updatedCart = [...cart, newCartItem];
    }

    setCart(updatedCart);
    setCountCart((prevCount) => prevCount + quantity);
    // Optionally reset quantity and size for next addition
    setQuantity(0);
    setSize("");
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const isAddToCartDisabled =
    quantity <= 0 || (category === "wetsuits" && !size);

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
            {/* Added validation message for size selection */}
            {category === "wetsuits" && !size && (
              <p className="validation-message">Please select a size.</p>
            )}
          </div>
        )}
        <p>Quantity</p>
        <input
          type="number"
          placeholder={quantity.toString()}
          onChange={handleQuantityChange}
        />
        {/* Added validation message for quantity */}
        {quantity <= 0 && (
          <p className="validation-message">Please select a valid quantity.</p>
        )}
        <p>Add To Cart</p>
        <button onClick={handleAddToCart} disabled={isAddToCartDisabled}>
          +
        </button>
      </div>
    </>
  );
}

export default AddToCart;
