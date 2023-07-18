import React from "react";
import NavBar from "./NavBar";
import "../Style/MainPage.css";
import SideBar from "./Sidebar";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function MainPage() {
  const [category, setCategory] = useState(null);
  return (
    <>
      <div className="wrap">
        <header className="header">
          <div className="title">Surfland</div>

          <NavBar />
        </header>
        <SideBar setCategory={setCategory} />
        <Content category={category} />
        <footer className="footer">Copyright</footer>
      </div>
    </>
  );
}

export default MainPage;
