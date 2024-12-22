import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import PurchaseSlice from "./PurchaseSlice";
import registerSlice from "./registerSlice";

export const store = configureStore({
    reducer:{
        product : ProductSlice,
        purchase : PurchaseSlice,
        register : registerSlice
    }
})