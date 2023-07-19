import React from "react";
import "../Style/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const modalClassName = `modal ${isOpen ? "open" : ""}`;

  return (
    <div className={modalClassName}>
      {/* Modal Content */}
      <div className="modal-content">
        <h2>Checkout</h2>
        <p>Modal content goes here...</p>
      </div>
      {/* Close Button */}
      <button className="modal-close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Modal;
