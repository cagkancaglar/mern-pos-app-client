import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    tax: 8,
  },
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findProduct) {
        findProduct.quantity += 1;
        state.total += parseInt(action.payload.price);
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          total: state.total + action.payload.price,
        };
      }
    },
    deleteProduct: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        state.total = state.total - action.payload.price;
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item._id !== action.payload._id
          ),
          total: state.total - action.payload.price,
        };
      }
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
