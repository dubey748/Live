import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import authReducer from "../features/auth/AuthSlice";
import cartReducer from "../features/cart/CartSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
