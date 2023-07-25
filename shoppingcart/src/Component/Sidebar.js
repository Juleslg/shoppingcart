import { useNavigate } from "react-router-dom";
import "../Style/SideBar.css";

function SideBar() {
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    // Update the navigation to include the selected category as a query parameter
    navigate(`/MainPage/overview?category=${category}`);
  };

  return (
    <div className="sidebar">
      <p onClick={() => handleCategoryChange("surfboard")}>Surfboard</p>
      <p onClick={() => handleCategoryChange("wax")}>Wax</p>
      <p onClick={() => handleCategoryChange("wetsuits")}>Wetsuits</p>
    </div>
  );
}

export default SideBar;
