function SideBar({ setCategory }) {
  return (
    <div className="sidebar">
      <button onClick={() => setCategory("surfboard")}>Surfboard</button>
      <button onClick={() => setCategory("wax")}>Wax</button>
      <button onClick={() => setCategory("wetsuits")}>Wetsuits</button>
    </div>
  );
}

export default SideBar;
