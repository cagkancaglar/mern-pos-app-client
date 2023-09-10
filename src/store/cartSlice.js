import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    price: 0
  },
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
