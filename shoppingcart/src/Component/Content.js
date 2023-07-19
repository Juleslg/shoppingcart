import React, { useState, useEffect } from "react";
import Overview from "./Overview";
import ProductPage from "./ProductPage";

function Content({ category, lastClicked }) {
  const [Page, setPage] = useState("overview");
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    setPage("overview");
  }, [category, lastClicked]);

  if (Page === "overview") {
    return (
      <Overview
        category={category}
        setPage={setPage}
        setSelectedProductId={setSelectedProductId}
      />
    );
  } else {
    return (
      <ProductPage
        category={category}
        selectedProductId={selectedProductId}
        setPage={setPage}
      />
    );
  }
}

export default Content;
