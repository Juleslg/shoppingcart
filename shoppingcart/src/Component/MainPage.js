import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../Style/MainPage.css";
import SideBar from "./Sidebar";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import shoppingcart from "../SVG/shopping-bag-filled-silhouette-svgrepo-com.svg";
import ShoppingCart from "./ShoppingCart";
import Modal from "./Checkout";
import CartProvider from "./CartProvider";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CartProvider>
        <div className="wrap">
          <header className="header">
            <div className="title">Surfland</div>
            <div className="rightheader">
              <NavBar />
              <ShoppingCart openModal={openModal} />
            </div>
          </header>
          <SideBar />
          <Content />
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <footer className="footer">Copyright</footer>
        </div>
      </CartProvider>
    </>
  );
}

export default MainPage;
