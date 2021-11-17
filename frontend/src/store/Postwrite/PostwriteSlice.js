import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  contact: "",
  deposit: 0,
  monthlyRent: 0,
  serviceFee: 0,
  includingTax: {
    electricity: false,
    water: false,
    gas: false,
  },
  contractExpireDate: "",
  moveInDate: "",
};

export const PostwriteSlice = createSlice({
  name: "postwrite",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setContact: (state, action) => {
      state.contact = action.payload.contact;
    },
    setDeposit: (state, action) => {
      state.deposit = action.payload.contact;
    },
    setMonthlyRent: (state, action) => {
      state.deposit = action.payload.monthlyRent;
    },
    setServiceFee: (state, action) => {
      state.deposit = action.payload.serviceFee;
    },
    setIncludingTax: (state, action) => {
      state.deposit = action.payload.includingTax;
    },
    setContractExpireDate: (state, action) => {
      state.deposit = action.payload.contractExpireDate;
    },
    setMoveInDate: (state, action) => {
      state.deposit = action.payload.moveInDate;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setTitle,
  setContact,
  setDeposit,
  setMonthlyRent,
  setServiceFee,
  setIncludingTax,
  setContractExpireDate,
  setMoveInDate,
} = PostwriteSlice.actions;

export default PostwriteSlice.reducer;
