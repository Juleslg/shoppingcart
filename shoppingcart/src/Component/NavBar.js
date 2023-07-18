import React from "react";
import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/Contact">Contact</Link>
        <Link to="/MainPage">Products</Link>
        <Link to="/HomePage">Home</Link>
      </div>
    </>
  );
}
export default NavBar;
