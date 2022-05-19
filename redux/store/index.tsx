import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "redux/slices/loadingSlice";

export const store = configureStore({
  reducer: {
    load: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
