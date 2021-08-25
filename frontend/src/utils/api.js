import { requestGet } from "./HttpMethod";

export const getPostItem = (url, parameters) => {
  return requestGet(url, parameters);
};
