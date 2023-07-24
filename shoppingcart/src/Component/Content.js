import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Content({
  category,
  selectedProductId,
  setSelectedProductId,
  setCountCart,
  cart,
  setCart,
  setLastClicked,
}) {
  const navigate = useNavigate();
  const [showNewArrivals, setShowNewArrivals] = useState(true);
  const HandleClick = () => {
    // Instead of setting Page prop, navigate directly
    navigate("/MainPage/Overview");
    setShowNewArrivals(false);
  };

  return (
    <>
      {showNewArrivals && <div onClick={HandleClick}>New Surfboard!</div>}
      {/* Props you want to pass to child components rendered by Outlet */}
      <Outlet
        category={category}
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
        setCountCart={setCountCart}
        setCart={setCart}
        cart={cart}
        setLastClicked={setLastClicked}
      />
    </>
  );
}

export default Content;
