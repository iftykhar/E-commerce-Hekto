import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartItemManager",
  initialState: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findProduct === -1) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[findProduct].qty += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      
      
    },

    increment: (state, action) => {
      
      const findProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (findProductIndex !== -1) {
        state.cartItems[findProductIndex].qty += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },

    decrement: (state, action) => {
      const findProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (findProductIndex !== -1) {
        if (state.cartItems[findProductIndex].qty > 1) {
          state.cartItems[findProductIndex].qty -= 1;
        } else {
          // state.cartItems.splice(findProductIndex, 1); 
        }
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, decrement, increment, clearCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
