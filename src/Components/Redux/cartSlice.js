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
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    },
  },
});

export const { showHideCart, addToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
