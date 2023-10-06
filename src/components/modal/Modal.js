import { useState } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { closeModal } from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../features/products/productSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    img: "",
  });

  const changeHandler = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const addNewUser = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(newProduct));
    dispatch(closeModal());
  };

  return (
    <div className="modal-wrap">
      <form className="modal-form" onSubmit={addNewUser}>
        <div>
          <h2>New product was edded</h2>
        </div>
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          <AiOutlineClose fontSize={"1.5rem"} />
        </button>
        <label htmlFor="title">Product title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={newProduct.title}
          onChange={changeHandler}
          required
        />
        <label htmlFor="description">Product description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={newProduct.description}
          onChange={changeHandler}
          required
        />
        <label htmlFor="price">Product price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={newProduct.value}
          onChange={changeHandler}
          required
        />
        <label htmlFor="img">Img link</label>
        <input
          id="img"
          type="text"
          name="img"
          value={newProduct.img}
          onChange={changeHandler}
          required
        />
        <button type="submit" className="btn">
          Add new product
        </button>
      </form>
    </div>
  );
};

export default Modal;
