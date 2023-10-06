import "./Header.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modal/modalSlice";

const Header = () => {
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <nav className="header-navbar">
          <Link to="/" className="header-logo">
            Some logo
          </Link>
          <button onClick={() => dispatch(showModal())} className="btn btn-add">
            Add new product
          </button>
          <div className="header-cart-container">
            <Link to="/cart">
              <BsCart4 fontSize={"2rem"} color={"#fff"} />
            </Link>
            <div className="header-cart-amount">
              <p className="header-total-amount">{amount}</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
