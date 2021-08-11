import { requestGet } from "./HttpMethod";

export const getPostItem = (url) => {
  return requestGet(url);
};
