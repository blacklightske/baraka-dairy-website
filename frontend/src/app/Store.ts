import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/AppSlice";
import DashboardSlice from "./slices/DashboardSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
    dashboard: DashboardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
