import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

interface InitialStateProptype {
  products: ProductType[];
  cart: ProductType[];
  cartIds: string[];
}

const initialState: InitialStateProptype = {
  products: [],
  cart: [],
  cartIds: [],
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProductsReducer: (state, action) => {
      state.products = action.payload;
      console.log(action.payload);
    },

    //function to add to product to cart
    addProductToCart: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartIds: [...state.cartIds, action.payload._id],
      };
    },

    //function to remove from cart
    removeProductFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (product) => product._id !== action.payload
      );
      const newCartIds = state.cartIds.filter((id) => id !== action.payload);
      return {
        ...state,
        cart: newCart,
        cartIds: newCartIds,
      };
    },
  },
});

export const { setProductsReducer, addProductToCart, removeProductFromCart } =
  AppSlice.actions;

export default AppSlice.reducer;
