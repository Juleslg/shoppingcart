import products from "./ProductsData";
import "../Style/Overview.css";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Overview = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "surfboard"; // Default to 'surfboard' if no category is provided
  const productsToDisplay = products.filter(
    (product) => product.category === category
  );
  const navigate = useNavigate();

  const handleProductClick = (slug) => {
    navigate(`/MainPage/ProductPage/${slug}`);
  };

  return (
    <div className="content">
      {productsToDisplay.map((product) => (
        <div className="cards" key={product.id}>
          <img
            onClick={() => handleProductClick(product.slug)}
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
