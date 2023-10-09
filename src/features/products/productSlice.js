import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";

const initialState = {
  productList: products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    editProduct: (state, { payload }) => {
      const productToEdit = state.productList.find(
        (item) => item.id === payload.id
      );
      productToEdit.title = payload.title;
      productToEdit.description = payload.description;
      productToEdit.img = payload.img;
      productToEdit.price = payload.price;
    },
    addNewProduct: (state, { payload }) => {
      const currentDay = new Date();
      payload.id = currentDay.toISOString();
      payload.amount = 1;
      state.productList = [...state.productList, payload];
    },
  },
});

export const { addNewProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
