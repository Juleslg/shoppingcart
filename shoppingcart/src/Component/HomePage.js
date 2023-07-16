import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/MainPage"); // Navigate to '/another-page'
  };

  return (
    <>
      <NavBar />
      <h1>HomePage</h1>
      <div>
        <button onClick={handleClick}>Go to another page</button>
      </div>
    </>
  );
}

export default HomePage;
