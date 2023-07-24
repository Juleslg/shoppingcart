import products from "./ProductsData";
import "../Style/InitialDisplay.css";

const InitialDisplay = ({ setPage, setSelectedProductId }) => {
  return (
    <div className="content">
      {products.map((product) => (
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

export default InitialDisplay;
