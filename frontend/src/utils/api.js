import {
  BASE_URL,
  UNIV_API,
  NICKNAME_API,
  SIGNUP_API,
} from "utils/constants/request";
import { requestGet, requestPut } from "./HttpMethod";

export const getPostItem = (url, parameters) => {
  return requestGet(url, parameters);
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
