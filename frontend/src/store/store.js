import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postwriteReducer from "./Postwrite/PostwriteSlice";

export const store = configureStore({
  reducer: { postwriteReducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
