import axios from "axios";

export const requestGet = async (url, parameters) => {
  try {
    const response = await axios.get(url, {
      params: {
        ...parameters,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
