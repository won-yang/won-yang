import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import postwriteReducer from "./Postwrite/PostwriteSlice";
import universityReducer from "./University/UniversitySlice";
import userReducer from "./User/userSlice";

// const reducer = combineReducers({ postwriteReducer, universityReducer });

export const store = configureStore({
  reducer: combineReducers({ postwriteReducer, universityReducer, userReducer }),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
