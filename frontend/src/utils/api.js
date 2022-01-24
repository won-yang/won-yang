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
} from "utils/constants/request";
import { requestGet, requestGetWithToken, requestPostWithToken, requestPut } from "./HttpMethod";

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
  return requestGetWithToken(`${BASE_URL}${END_POINT.uploadUrl}`);
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
  console.log("here");
  const { including_tax, contents: content, ...rest } = body;
  return requestPostWithToken(`${BASE_URL}${END_POINT.write}`, {
    campus_id,
    content,
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
