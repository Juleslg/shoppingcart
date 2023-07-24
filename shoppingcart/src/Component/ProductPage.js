import React, { useState } from "react";
import products from "./ProductsData";
import "../Style/ProductPage.css";
import AddToCart from "./Addtocart";
import { useParams } from "react-router-dom";

const ProductPage = ({
  selectedProductId,
  setCountCart,
  cart,
  setCart,
  setLastClicked,
}) => {
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
          <h1>{product.name}</h1>
          <p> {product.price}</p>
          <p>{product.description}</p>
          <AddToCart
            category={product.category}
            selectedProductId={selectedProductId}
            setCountCart={setCountCart}
            setCart={setCart}
            cart={cart}
            setLastClicked={setLastClicked}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
