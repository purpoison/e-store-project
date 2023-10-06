import "./ProductContainer.css";
import ProductItem from "../productItem/ProductItem";
import products from "../../products";
import { useSelector } from "react-redux";

const ProductContainer = () => {
  const { productList } = useSelector((state) => state.products);

  return (
    <div className="container">
      <h3 className="title">Our products:</h3>
      <div className="product-container">
        {productList.map((product) => {
          return <ProductItem key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductContainer;
