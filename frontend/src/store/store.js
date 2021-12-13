import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import postwriteReducer from "./Postwrite/PostwriteSlice";
import universityReducer from "./University/UniversitySlice";

// const reducer = combineReducers({ postwriteReducer, universityReducer });

export const store = configureStore({
  reducer: combineReducers({ postwriteReducer, universityReducer }),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
