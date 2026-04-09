import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

// types (important)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;