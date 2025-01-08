import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

// Service to fetch the list of farmers
export const getFarmersService = createAsyncThunk(
  "farmers/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("user"); // Replace with the correct API endpoint for fetching farmers
      return res.data; // Ensure the data structure matches the expected response
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// Service to create a milk record
export const createMilkRecordService = createAsyncThunk(
  "milk/create",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await API.post("milk-records", data);
      return res.data; // Ensure the data structure matches the expected response
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// Service to get milk records based on userId and date range
export const getMilkRecordsService = createAsyncThunk(
  "milk/getRecords",
  async ({ userId, startDate, endDate }: { userId: string; startDate: string; endDate: string }, { rejectWithValue }) => {
    try {
      const res = await API.get("milk-records", {
        params: { userId, startDate, endDate } // Assuming the API accepts these query parameters
      });
      return res.data; // Ensure the response matches your expected format for milk records
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
