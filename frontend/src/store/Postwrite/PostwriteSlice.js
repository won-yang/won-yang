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
      state.title = action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    setDeposit: (state, action) => {
      state.deposit = action.payload;
    },
    setMonthlyRent: (state, action) => {
      state.monthlyRent = action.payload;
    },
    setServiceFee: (state, action) => {
      state.serviceFee = action.payload;
    },
    setIncludingTax: (state, action) => {
      state.includingTax = {
        ...state.includingTax,
        [action.payload]: !state.includingTax[action.payload],
      };
    },
    setContractExpireDate: (state, action) => {
      state.contractExpireDate = action.payload;
    },
    setMoveInDate: (state, action) => {
      state.moveInDate = action.payload;
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
