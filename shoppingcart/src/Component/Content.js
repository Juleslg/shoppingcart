import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import products from "./Products";

function Content({ category }) {
  const productsToDisplay = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="content">
      {productsToDisplay.map((product) => (
        <div className="cards" key={product.id}>
          <img src={product.image} alt="sneaker" className="image" />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Content;
