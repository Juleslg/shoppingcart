import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Component/HomePage";
import MainPage from "./Component/MainPage";
import NavBar from "./Component/NavBar";
import Contact from "./Component/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
