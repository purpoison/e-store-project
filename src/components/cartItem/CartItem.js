import "./CartItem.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { increase, decrease, deleteItem } from "../../features/cart/cartSlice";

const CartItem = (product) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img src={product.img} alt={product.title} />
      <div className="cart-text-container">
        <h4 style={{ textTransform: "capitalize" }}>{product.title}</h4>
        <h4 className="item-price">${product.price}</h4>
        <button
          className="btn"
          onClick={() => {
            dispatch(deleteItem(product.title));
          }}
        >
          <FaRegTrashAlt />
        </button>
      </div>
      <div className="amount-container">
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase(product.title));
          }}
        >
          <IoIosArrowUp fontSize={"2rem"} color="rgb(0, 113, 113)" />
        </button>
        <p className="amount">{product.amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (product.amount === 1) {
              dispatch(deleteItem(product.title));
            } else {
              dispatch(decrease(product.title));
            }
          }}
        >
          <IoIosArrowDown fontSize={"2rem"} color="rgb(0, 113, 113)" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
