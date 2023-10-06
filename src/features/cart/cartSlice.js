import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (!state.cartItems.hasOwnProperty(payload.title)) {
        state.cartItems = { ...state.cartItems, [payload.title]: payload };
      } else {
        state.cartItems[payload.title].amount += 1;
      }
      let total = 0;

      Object.values(state.cartItems).forEach((item) => {
        total += item.amount * item.price;
      });
      state.total = total;
      state.amount++;
      localStorage.setItem("products", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
      localStorage.clear();
    },
    restoreCart: (state, { payload }) => {
      let amt = 0;
      let total = 0;
      state.cartItems = payload;
      Object.values(payload).forEach((item) => {
        amt += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amt;
      state.total = total;
    },
    increase: (state, { payload }) => {
      state.cartItems[payload].amount += 1;
      state.amount++;
      state.total += Number(state.cartItems[payload].price);
      let fromLocal = JSON.parse(localStorage.getItem("products"));
      fromLocal[payload].amount++;
      localStorage.setItem("products", JSON.stringify(fromLocal));
    },
    decrease: (state, { payload }) => {
      state.cartItems[payload].amount -= 1;
      state.amount--;
      state.total -= Number(state.cartItems[payload].price);
      let fromLocal = JSON.parse(localStorage.getItem("products"));
      fromLocal[payload].amount--;
      localStorage.setItem("products", JSON.stringify(fromLocal));
    },
    deleteItem: (state, { payload }) => {
      state.amount -= state.cartItems[payload].amount;
      state.total -= Number(state.cartItems[payload].price);
      delete state.cartItems[payload];
      let fromLocal = JSON.parse(localStorage.getItem("products"));
      delete fromLocal[payload];
      localStorage.setItem("products", JSON.stringify(fromLocal));
    },
  },
});

export const {
  addToCart,
  clearCart,
  restoreCart,
  addProduct,
  increase,
  decrease,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
