import CartItem from "../cartItem/CartItem";
import "./CartContainer.css";
import { clearCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="container cart-container">
      <h2 className="title">your bag</h2>
      {Object.keys(cartItems).length !== 0 ? (
        <div>
          {Object.values(cartItems).map((product) => {
            return <CartItem key={product.id} {...product} />;
          })}
          <div className="cart-footer">
            <div className="cart-total">
              <h4>
                total <span>$ {total.toFixed(2)}</span>
              </h4>
            </div>
            <div className="cart-btn">
              <button
                className="btn clear-btn"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                Clear cart
              </button>
              <button className="btn ">Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="message">Is empty :(</div>
      )}
    </div>
  );
};

export default CartContainer;
