import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "utils/api";

export const fetchUserInfo = createAsyncThunk("user/fetchUserInfo", async () => {
  const res = await getUserInfo();
  return res;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.userInfo = payload;
    });
  },
});

export const selectUser = (state) => state.userReducer;

// Action creators are generated for each case reducer function
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
