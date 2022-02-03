import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "utils/api";

export const fetchUserInfo = createAsyncThunk("user/fetchUserInfo", async () => {
  const res = await getUserInfo();
  if (res.message === "invalid token") {
    return Promise.reject();
  }
  return res;
});

const initialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload.info;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.rejected, (state) => {});
    builder.addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
      state.userInfo = payload;
    });
  },
});

export const selectUser = (state) => state.userReducer;

// Action creators are generated for each case reducer function
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
