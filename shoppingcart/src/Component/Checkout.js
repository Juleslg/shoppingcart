import React, { useContext } from "react";
import "../Style/Modal.css";
import CartContext from "./CartContext"; // Make sure the path is correct

const Modal = ({ isOpen, onClose }) => {
  // Using context to get cart state and actions
  const { cart, setCart, setCountCart } = useContext(CartContext);

  const modalClassName = `modal ${isOpen ? "open" : ""}`;

  const resetCart = () => {
    setCart([]);
    setCountCart(0); // Use 0 instead of null for consistency
    onClose();
  };

  const deleteItem = (indexToDelete) => {
    const itemQuantityToDelete = cart[indexToDelete].quantity;

    const updatedCart = cart.filter((_, index) => index !== indexToDelete);
    setCart(updatedCart);
    setCountCart((prevCount) => prevCount - itemQuantityToDelete);
  };

  const updateQuantity = (indexToUpdate, quantity) => {
    const updatedCart = [...cart];
    updatedCart[indexToUpdate].quantity = parseInt(quantity, 10); // Ensure quantity is a number
    setCart(updatedCart);

    const totalItems = updatedCart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCountCart(totalItems); // Update the cart count with the new total
  };

  const grandTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className={modalClassName}>
        <div className="modal-content">
          <h2>Checkout</h2>
          {cart.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(index, e.target.value)}
                  min="1"
                />
              </p>
              <p>Price: {item.price}</p>
              <p>Total: {item.price * item.quantity}</p>
              {item.size && <p>Size: {item.size}</p>}
              <button onClick={() => deleteItem(index)}>Delete Item</button>
            </div>
          ))}
          <div>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
          </div>
          <button onClick={resetCart}>Delete Cart</button>
        </div>
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
};

export default Modal;
