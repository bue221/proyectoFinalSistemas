import { configureStore } from "@reduxjs/toolkit";
import elevatorSlice from "redux/slices/elevatorSlice";
import loadingSlice from "redux/slices/loadingSlice";

export const store = configureStore({
  reducer: {
    load: loadingSlice,
    elevator: elevatorSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
