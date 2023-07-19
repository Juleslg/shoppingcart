import React, { useState } from "react";
import products from "./ProductsData";
import "../Style/ProductPage.css";
import AddToCart from "./Addtocart";

const ProductPage = ({ selectedProductId }) => {
  const product = products.find((product) => product.id === selectedProductId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div className="productpage">
        {" "}
        <div className="productcard">
          <img
            className="imageproduct"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p> {product.price}</p>
          <p>{product.description}</p>
          <AddToCart category={product.category} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
