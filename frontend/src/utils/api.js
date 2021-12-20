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

export const getPostItem = (url, parameters) => {
  return requestGet(url, parameters);
};

export const getLogin = (codeQuery) => {
  return requestGet(`${BASE_URL + KAKAO_URL + CALLBACK_URL}`, {
    code: codeQuery,
  });
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
  console.log(body);

  return requestPostWithToken(`${BASE_URL}${END_POINT.write}`, { campus_id, ...body });
};
