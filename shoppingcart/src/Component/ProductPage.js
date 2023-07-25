import React, { useState } from "react";
import products from "./ProductsData";
import "../Style/ProductPage.css";
import AddToCart from "./Addtocart";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productSlug } = useParams();
  const product = products.find((product) => product.slug === productSlug);

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
          <h1 className="productname">{product.name}</h1>
          <p className="productprice">Price : {product.price} $</p>
          <p className="productdescription">{product.description}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
