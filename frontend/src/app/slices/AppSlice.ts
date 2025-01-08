import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

interface InitialStateProptype {
  products: ProductType[];
  cart: ProductType[];
  cartIds: string[];
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
}

const initialState: InitialStateProptype = {
  products: [],
  cart: [],
  cartIds: [],
  isAuthenticated: false,
  user: null,
  token: null,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProductsReducer: (state, action) => {
      state.products = action.payload;
    },
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
      state.cartIds.push(action.payload._id);
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product._id !== action.payload);
      state.cartIds = state.cartIds.filter((id) => id !== action.payload);
    },
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const {
  setProductsReducer,
  addProductToCart,
  removeProductFromCart,
  loginUser,
  logoutUser,
} = AppSlice.actions;

export default AppSlice.reducer;
