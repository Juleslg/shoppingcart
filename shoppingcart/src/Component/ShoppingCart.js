import React from "react";
import shoppingcart from "../SVG/shopping-bag-filled-silhouette-svgrepo-com.svg";

const ShoppingCart = ({ openModal, countCart }) => {
  return (
    <>
      <div className="shoppingcart">
        <img onClick={openModal} src={shoppingcart} alt="Shopping Cart" />
        <p className="itemcount">{countCart}</p>
      </div>
    </>
  );
};

export default ShoppingCart;
