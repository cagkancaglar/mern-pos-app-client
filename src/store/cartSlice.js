import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    },
    deleteProduct: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      }
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
