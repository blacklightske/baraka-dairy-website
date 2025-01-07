import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const createProductService = createAsyncThunk(
  "product/create",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await API.post("product", data);

      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const getProductsService = createAsyncThunk(
  "product/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("product");

      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
