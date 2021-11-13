import { configureStore } from "@reduxjs/toolkit";
import postwriteReducer from "./Postwrite/PostwriteSlice";

export const store = configureStore({
  reducer: { postwriteReducer },
});
