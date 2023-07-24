import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../Style/MainPage.css";
import SideBar from "./Sidebar";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import shoppingcart from "../SVG/shopping-bag-filled-silhouette-svgrepo-com.svg";
import ShoppingCart from "./ShoppingCart";
import Modal from "./Checkout";

function MainPage() {
  const [lastClicked, setLastClicked] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countCart, setCountCart] = useState(null);
  const [cart, setCart] = useState([]);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryClick = (newCategory) => {
    setLastClicked(Date.now());
  };

  return (
    <>
      <div className="wrap">
        <header className="header">
          <div className="title">Surfland</div>
          <div className="rightheader">
            <NavBar />
            <ShoppingCart countCart={countCart} openModal={openModal} />
          </div>
        </header>
        <SideBar setCategory={handleCategoryClick} />
        <Content
          lastClicked={lastClicked}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
          setCountCart={setCountCart}
          setCart={setCart}
          cart={cart}
          setLastClicked={setLastClicked}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedProductId={selectedProductId}
          setCart={setCart}
          cart={cart}
          setCountCart={setCountCart}
        />
        <footer className="footer">Copyright</footer>
      </div>
    </>
  );
}

export default MainPage;
