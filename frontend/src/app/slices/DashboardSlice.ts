import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createProductService, getProductsService } from "../services/product-service";
import { createMilkRecordService, getMilkRecordsService } from "../services/milk-service";  // Import getMilkRecordsService
import { ProductType } from "../../types/types";

interface InitialStateType {
  loading: boolean;
  sub_loading: boolean;
  success: boolean;
  error: string | undefined | unknown;
  sideBarCollapse: boolean;
  products: ProductType[];
  milkLoading: boolean;
  milkSuccess: boolean;
  milkError: string | undefined | unknown;
  milkRecords: any[];  // Define a type for milk records if possible
}

const initialState: InitialStateType = {
  sideBarCollapse: false,
  loading: false,
  sub_loading: false,
  success: false,
  error: "",
  products: [],
  milkLoading: false,
  milkSuccess: false,
  milkError: "",
  milkRecords: [],  // Initialize with empty array or whatever initial state fits
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.sideBarCollapse = !state.sideBarCollapse;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Milk Record
      .addCase(createMilkRecordService.pending, (state) => {
        state.milkLoading = true;
        state.milkSuccess = false;
        state.milkError = "";
      })
      .addCase(createMilkRecordService.fulfilled, (state, action) => {
        state.milkLoading = false;
        state.milkSuccess = true;
        toast.success("Milk record added successfully", {
          position: "bottom-right",
        });
        state.milkRecords = [action.payload.data, ...state.milkRecords];  // Assuming response contains the added record
      })
      .addCase(createMilkRecordService.rejected, (state, action: any) => {
        state.milkLoading = false;
        toast.error("Unable to add Milk Record, please re-try", {
          position: "bottom-right",
        });
        state.milkError =
          action.error.message ?? action?.payload?.response?.data?.msg ?? "An error occurred while adding the milk record";
      })
      
      // Get Milk Records
      .addCase(getMilkRecordsService.pending, (state) => {
        state.milkLoading = true;
        state.milkRecords = [];  // Clear previous records when loading new ones
        state.milkError = "";
      })
      .addCase(getMilkRecordsService.fulfilled, (state, action) => {
        state.milkLoading = false;
        state.milkRecords = action.payload;  // Assuming the response contains the fetched records
      })
      .addCase(getMilkRecordsService.rejected, (state, action: any) => {
        state.milkLoading = false;
        toast.error("Unable to fetch Milk Records, please re-try", {
          position: "bottom-right",
        });
        state.milkError =
          action.error.message ?? action?.payload?.response?.data?.msg ?? "An error occurred while fetching milk records";
      })

      // Get products (as you have)
      .addCase(createProductService.pending, (state) => {
        state.sub_loading = true;
        state.success = false;
        state.error = "";
      })
      .addCase(createProductService.fulfilled, (state, action) => {
        state.sub_loading = false;
        state.success = true;
        toast.success("Product added successfully", {
          position: "bottom-right",
        });
        state.products = [action.payload.data.product, ...state.products];
      })
      .addCase(createProductService.rejected, (state, action: any) => {
        state.sub_loading = false;
        toast.error("Unable to add Product, please re-try", {
          position: "bottom-right",
        });
        state.error =
          action.error.message ?? action?.payload?.response?.data?.msg ?? "An error occurred processing your request, Please retry";
      })
      
      // Get products (as you have)
      .addCase(getProductsService.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getProductsService.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data.products;
      })
      .addCase(getProductsService.rejected, (state, action: any) => {
        state.loading = false;
        state.error =
          action.error.message ?? action?.payload?.response?.data?.msg ?? "An error occurred processing your request, Please retry";
      });
  },
});

export const { toggleSideBar } = DashboardSlice.actions;

export default DashboardSlice.reducer;
