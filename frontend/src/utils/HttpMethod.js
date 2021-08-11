import axios from "axios";

export const requestGet = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
