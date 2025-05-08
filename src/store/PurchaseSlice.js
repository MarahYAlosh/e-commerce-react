import { createSlice } from "@reduxjs/toolkit";

const PurchaseSlice = createSlice({
  name: "purchase",
  initialState: [],
  reducers: {
    addPurchase: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removePurchase: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});
export default PurchaseSlice.reducer;
export const { addPurchase, removePurchase } = PurchaseSlice.actions;
