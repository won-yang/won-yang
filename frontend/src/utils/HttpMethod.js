import {
  BASE_URL,
  UNIV_API,
  NICKNAME_API,
  SIGNUP_API,
  KAKAO_URL,
  CALLBACK_URL,
} from "utils/constants/request";
import axios from "axios";

const getAccessToken = () => {
  return "1";
};

const setAccessTokenHeader = () => {
  return {
    Authorization: `${getAccessToken()}`,
  };
};

const tokenInstance = axios.create({
  baseURL: BASE_URL,
  headers: { ...getAccessToken() },
  responseType: "json",
  validateStatus: (status) => {
    return status < 400;
  },
});
// instance.defaults.headers.common['Authorization'] = TOKEN 으로 수정가능합니다
export const requestGetWithToken = async (endPoint, parameters) => {
  try {
    const res = await tokenInstance.get(endPoint, {
      params: {
        ...parameters,
      },
      withCredentials: true,
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const requestPostWithToken = async (endPoint, body) => {
  try {
    const res = await tokenInstance.post(endPoint, body, { withCredentials: true });
    return res.data;
  } catch (e) {
    window.alert(e.response.data.message);
  }
};

export const requestGet = async (url, parameters) => {
  // try {
  if (parameters) {
    const response = await axios.get(url, {
      headers: {
        ...setAccessTokenHeader(),
      },
      params: {
        ...parameters,
      },
      withCredentials: true,
    });
    return response.data;
  } else {
    const response = await axios.get(url, { withCredentials: true });
    return response.data;
  }
};

export const requestPut = async (url, parameters) => {
  try {
    if (parameters) {
      const response = await axios.put(
        url,
        {
          ...parameters,
        },
        {
          withCredentials: true,
        },
      );
      return response;
    } else {
      const response = await axios.put(url);
      return response;
    }
  } catch (e) {
    console.log(e);
  }
};

export const requestPost = async (url, parameters) => {
  try {
    const response = await axios.post(
      url,
      {
        ...parameters,
      },
      {
        withCredentials: true,
      },
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
