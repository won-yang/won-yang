import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload.info;
    },
  },
});

export const selectUser = (state) => state.userReducer;

// Action creators are generated for each case reducer function
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
