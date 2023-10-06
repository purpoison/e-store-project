import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { editProduct } from "../../features/products/productSlice";

const ProductItem = (product) => {
  const dispatch = useDispatch();
  const [isDisabled, setDisabled] = useState(true);
  const [producValues, setProductValues] = useState({
    title: product.title,
    description: product.description,
    img: product.img,
    price: product.price,
  });
  const activeStyle = {
    border: "1px solid rgb(0, 113, 113)",
    backgroundColor: " rgb(227, 239, 239)",
  };
  const inputHandler = (e) => {
    setProductValues({ ...producValues, [e.target.name]: e.target.value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(
      editProduct({
        id: product.id,
        title: producValues.title,
        description: producValues.description,
        img: producValues.img,
        price: producValues.price,
      })
    );
  };

  return (
    <form onSubmit={formHandler} className="product-item">
      <button
        className="edit-icon"
        onClick={() => {
          setDisabled(false);
        }}
      >
        <FiEdit />
      </button>
      {isDisabled ? (
        <img src={product.img} alt={product.title} />
      ) : (
        <input
          type="text"
          className="img-input"
          name="img"
          value={producValues.img}
          onChange={inputHandler}
        />
      )}

      <input
        type="text"
        className="product-item-title"
        style={!isDisabled ? activeStyle : {}}
        value={producValues.title}
        disabled={isDisabled}
        name="title"
        onChange={inputHandler}
      />
      <textarea
        type="text"
        className="product-item-description"
        value={producValues.description}
        style={!isDisabled ? activeStyle : {}}
        name="description"
        disabled={isDisabled}
        onChange={inputHandler}
      ></textarea>
      <input
        type="number"
        className="product-item-price"
        disabled={isDisabled}
        value={producValues.price}
        style={!isDisabled ? activeStyle : {}}
        name="price"
        onChange={inputHandler}
      />
      {isDisabled ? (
        <button
          className="btn"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to cart
        </button>
      ) : (
        <button className="btn" type="submit" onClick={() => setDisabled(true)}>
          Submit
        </button>
      )}
    </form>
  );
};

export default ProductItem;
