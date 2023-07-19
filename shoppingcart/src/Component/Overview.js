import products from "./ProductsData";
import "../Style/Overview.css";

const Overview = ({ category, setPage, setSelectedProductId }) => {
  const productsToDisplay = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="content">
      {productsToDisplay.map((product) => (
        <div className="cards" key={product.id}>
          <img
            onClick={() => {
              setPage("product");
              setSelectedProductId(product.id);
            }}
            src={product.image}
            alt="products"
            className="image"
          />
          <div className="cardsinfos">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
