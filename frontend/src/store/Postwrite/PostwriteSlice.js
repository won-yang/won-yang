import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
import { ETC_OPTIONS, FURNITURES, HOME_APPLIANCES } from "utils/constants";

const initialState = {
  title: "",
  contact: "",
  deposit: "",
  monthly_rent: "",
  service_fee: "",
  including_tax: {
    electricity: false,
    water: false,
    gas: false,
  },
  contract_expire_date: moment().format("YYYY-MM-DD"),
  move_in_date: moment().format("YYYY-MM-DD"),
  address: "",
  address_detail: "",
  is_address_visible: false,
  total_floor: "",
  current_floor: "",
  building_type: "",
  room_type: "",
  window_side: "",
  walking_time: "",
  bus_time: "",
  contents: "",
  option: [],
  homeAppliances: HOME_APPLIANCES,
  furnitures: FURNITURES,
  etcOptions: ETC_OPTIONS,
  images: {
    files: [],
    urls: [],
  },
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
      state.monthly_rent = action.payload;
    },
    setServiceFee: (state, action) => {
      state.service_fee = action.payload;
    },
    setIncludingTax: (state, action) => {
      state.including_tax = {
        ...state.including_tax,
        [action.payload]: !state.including_tax[action.payload],
      };
    },
    setContractExpireDate: (state, action) => {
      state.contract_expire_date = action.payload;
    },
    setMoveInDate: (state, action) => {
      state.move_in_date = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAddressDetail: (state, action) => {
      state.address_detail = action.payload;
    },
    setAddressVisible: (state, action) => {
      console.log(state.is_address_visible);
      state.is_address_visible = !state.is_address_visible;
      // if (action.payload) state.is_address_visible = true;
      // else state.is_address_visible = false;
    },
    setTotalFloor: (state, action) => {
      state.total_floor = action.payload;
    },
    setCurrentFloor: (state, action) => {
      state.current_floor = action.payload;
    },
    setBuildingType: (state, action) => {
      state.building_type = action.payload;
    },
    setRoomType: (state, action) => {
      state.room_type = action.payload;
    },
    setWindowSide: (state, action) => {
      state.window_side = action.payload;
    },
    setWalkingTime: (state, action) => {
      state.walking_time = action.payload;
    },

    setBusTime: (state, action) => {
      state.bus_time = action.payload;
    },
    setSelectOption: (state, action) => {
      // state.
      const {
        payload: { kind, name },
      } = action;
      if (kind === "etc") {
        state.etcOptions = state.etcOptions.map((option) =>
          option.name === name ? { ...option, isSelected: !option.isSelected } : option,
        );
      } else if (kind === "homeAppliances") {
        state.homeAppliances = state.homeAppliances.map((option) =>
          option.name === name ? { ...option, isSelected: !option.isSelected } : option,
        );
      } else {
        state.furnitures = state.furnitures.map((option) =>
          option.name === name ? { ...option, isSelected: !option.isSelected } : option,
        );
      }
      state.option = state.etcOptions
        .map((option) => (option.isSelected ? option.id : null))
        .filter((option) => option);

      state.option.push(
        ...state.homeAppliances
          .map((option) => (option.isSelected ? option.id : null))
          .filter((option) => option),
      );
      state.option.push(
        ...state.furnitures
          .map((option) => (option.isSelected ? option.id : null))
          .filter((option) => option),
      );
    },
    setContents: (state, action) => {
      state.contents = action.payload;
    },
    setImages: (state, action) => {
      state.images.files.push(action.payload.files);
      state.images.urls.push(action.payload.url);
      console.log(action);
    },
  },
});

export const selectPostWrite = (state) => state.postwriteReducer;

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
  setAddress,
  setAddressDetail,
  setAddressVisible,
  setTotalFloor,
  setCurrentFloor,
  setBuildingType,
  setRoomType,
  setWindowSide,
  setWalkingTime,
  setBusTime,
  setSelectOption,
  setContents,
  setImages,
} = PostwriteSlice.actions;

export default PostwriteSlice.reducer;
