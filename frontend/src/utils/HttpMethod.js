import axios from "axios";

export const requestGet = async (url, parameters) => {
  try {
    if (parameters) {
      const response = await axios.get(url, {
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
  } catch (e) {
    console.log(e);
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
