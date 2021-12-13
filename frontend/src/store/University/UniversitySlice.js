import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campusInfo: {},
};

export const UnivercitySlice = createSlice({
  name: "university",
  initialState,
  reducers: {
    setUnivInfo: (state, action) => {
      state.campusInfo = action.payload.info;
    },
  },
});

export const selectUniversity = (state) => state.universityReducer;

// Action creators are generated for each case reducer function
export const { setUnivInfo } = UnivercitySlice.actions;

export default UnivercitySlice.reducer;
