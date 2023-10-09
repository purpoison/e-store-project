import "./App.css";
import Cart from "./components/cartContainer/CartContainer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import ProductContainer from "./components/productContainer/ProductContainer";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreCart } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    const itemInLocal = localStorage.getItem("products");
    if (itemInLocal) {
      dispatch(restoreCart(JSON.parse(itemInLocal)));
    }
  }, []);
  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<ProductContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
