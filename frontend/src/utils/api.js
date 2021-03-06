import axios from "axios";
import {
  BASE_URL,
  UNIV_API,
  NICKNAME_API,
  SIGNUP_API,
  KAKAO_URL,
  CALLBACK_URL,
  CAMPUS,
  END_POINT,
  SIGNOUT_API,
} from "utils/constants/request";
import {
  requestGet,
  requestGetWithToken,
  requestPost,
  requestPostWithToken,
  requestPut,
} from "./HttpMethod";

export const getPostList = (parameters) => {
  return requestGet(`${BASE_URL}${END_POINT.board}`, parameters);
};

export const getPostItem = (id) => {
  return requestGet(`${BASE_URL}${END_POINT.post}`, { id });
};

export const getLogin = (codeQuery) => {
  return requestGet(`${BASE_URL + KAKAO_URL + CALLBACK_URL}`, {
    code: codeQuery,
  });
};

export const getImageUploadURL = () => {
  return requestPostWithToken(`${BASE_URL}${END_POINT.uploadUrl}`);
};

export const getLogout = () => {
  return axios.delete(`${BASE_URL + SIGNOUT_API}`, { withCredentials: true });
};

export const getUserInfo = () => {
  return requestGet(`${BASE_URL}/user`);
};

export const getCampusList = (input) => {
  return requestGet(`${BASE_URL}${UNIV_API}`, { name: input });
};

export const getNickName = (input) => {
  return requestGet(`${BASE_URL}${NICKNAME_API}`, { nickname: input });
};

export const putSignup = (params) => {
  return requestPut(`${BASE_URL}${SIGNUP_API}`, params);
};

export const getCampusInfo = (campus_id) => {
  return requestGet(`${BASE_URL}${CAMPUS}`, { campus_id });
};

export const postWrite = (campus_id, body) => {
  const {
    including_tax,
    contents: content,
    deposit,
    monthly_rent,
    service_fee,
    total_floor,
    current_floor,
    walking_time,
    bus_time,
    ...rest
  } = body;
  return requestPostWithToken(`${BASE_URL}${END_POINT.write}`, {
    campus_id,
    content,
    deposit: parseInt(deposit, 10),
    monthly_rent: parseInt(monthly_rent, 10),
    service_fee: parseInt(service_fee, 10),
    total_floor: parseInt(total_floor, 10),
    current_floor: parseInt(current_floor, 10),
    walking_time: parseInt(walking_time, 10),
    bus_time: parseInt(bus_time, 10),
    ...including_tax,
    ...rest,
  });
};

export const postUploadImageUrl = (url, images) => {
  const blobData = new Blob([new Uint8Array(images)], { type: "image/jpeg" });
  return axios.post(`${url}`, blobData);
};

export const postUploadImage = () => {
  return requestPostWithToken(`${BASE_URL}${END_POINT.uploadUrl}`);
};
