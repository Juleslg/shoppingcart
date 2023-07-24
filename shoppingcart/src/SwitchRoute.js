import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Component/HomePage";
import MainPage from "./Component/MainPage";
import NavBar from "./Component/NavBar";
import Contact from "./Component/Contact";
import Content from "./Component/Content";
import Overview from "./Component/Overview";
import ProductPage from "./Component/ProductPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ... other routes ... */}
        <Route path="/MainPage" element={<MainPage />}>
          <Route index element={<Content />} />
          <Route path="Overview" element={<Overview />} />
          <Route path="ProductPage/:productSlug" element={<ProductPage />} />
        </Route>
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
