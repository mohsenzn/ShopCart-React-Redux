import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    cartItems: [],
  },
  reducers: {
    showHideCart: (state) => {
      state.showCart = !state.showCart;
    },
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { showHideCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
