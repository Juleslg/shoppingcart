import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Content({}) {
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

      <Outlet />
    </>
  );
}

export default Content;
