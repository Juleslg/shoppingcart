import React from "react";
import NavBar from "./NavBar";
import "../Style/MainPage.css";
import SideBar from "./Sidebar";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import shoppingcart from "../SVG/shopping-bag-filled-silhouette-svgrepo-com.svg";
import ShoppingCart from "./ShoppingCart";
import Modal from "./Checkout";

function MainPage() {
  const [category, setCategory] = useState(null);
  const [lastClicked, setLastClicked] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    setLastClicked(Date.now());
  };
  return (
    <>
      <div className="wrap">
        <header className="header">
          <div className="title">Surfland</div>
          <div className="rightheader">
            <NavBar />
            <ShoppingCart openModal={openModal} />
          </div>
        </header>
        <SideBar setCategory={handleCategoryClick} />
        <Content category={category} lastClicked={lastClicked} />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <footer className="footer">Copyright</footer>
      </div>
    </>
  );
}

export default MainPage;
