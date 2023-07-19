import React from "react";

function AddToCart({ category }) {
  return (
    <>
      <div className="options">
        {category === "wetsuits" && (
          <div>
            <p>Size</p>
            <input type="radio" id="small" name="size" value="small" />
            <label for="small">S</label>
            <input type="radio" id="medium" name="size" value="medium" />
            <label for="medium">M</label>
            <input type="radio" id="large" name="size" value="large" />
            <label for="large">L</label>
          </div>
        )}
        <p>Quantity</p>
        <input type="number"></input>
        <p>Add To Cart</p>
        <button>+</button>
      </div>
    </>
  );
}

export default AddToCart;
