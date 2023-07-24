import React from "react";
import "../Style/Modal.css";

const Modal = ({ isOpen, onClose, setCart, cart, setCountCart }) => {
  const modalClassName = `modal ${isOpen ? "open" : ""}`;
  console.log(cart);

  const resetCart = () => {
    setCart([]);
    setCountCart(null);
    onClose();
  };

  const deleteItem = (indexToDelete) => {
    const itemQuantityToDelete = cart[indexToDelete].quantity;

    const updatedCart = cart.filter((_, index) => index !== indexToDelete);
    setCart(updatedCart);

    if (typeof setCountCart === "number") {
      setCountCart((prevCount) => prevCount - itemQuantityToDelete);
    } else {
      setCountCart(null);
    }
  };

  const updateQuantity = (indexToUpdate, quantity) => {
    const updatedCart = [...cart];
    updatedCart[indexToUpdate].quantity = quantity;
    setCart(updatedCart);
    setCountCart(quantity);
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
