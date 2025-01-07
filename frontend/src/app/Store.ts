import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/AppSlice";
import DashboardSlice from "./slices/DashboardSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
    dashboard: DashboardSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
