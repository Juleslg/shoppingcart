import { useNavigate } from "react-router-dom";

function SideBar({ setCategory }) {
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setCategory(category);
    navigate("/MainPage/overview");
  };
  return (
    <div className="sidebar">
      <button onClick={() => setCategory("surfboard")}>Surfboard</button>
      <button onClick={() => setCategory("wax")}>Wax</button>
      <button onClick={() => setCategory("wetsuits")}>Wetsuits</button>
    </div>
  );
}

export default SideBar;
