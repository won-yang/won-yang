import {
  BASE_URL,
  UNIV_API,
  NICKNAME_API,
  SIGNUP_API,
  KAKAO_URL,
  CALLBACK_URL,
  CAMPUS,
  WRITE,
  END_POINT,
} from "utils/constants/request";
import { requestGet, requestGetWithToken, requestPut, requestPostWithToken } from "./HttpMethod";

export const getPostItem = (id) => {
  return requestGet(`${BASE_URL}${END_POINT.post}`, { id });
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
  return requestGet(`${BASE_URL}${END_POINT.main}`, { campus_id });
};

export const postWrite = (campus_id, body) => {
  return requestPostWithToken(`${BASE_URL}${END_POINT.write}`, { campus_id, ...body });
};
