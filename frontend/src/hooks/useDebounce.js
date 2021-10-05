import React, { useCallback } from "react";
import { DEBOUNCE_TIME } from "utils/constants/numbers";
import { debounce } from "lodash";

const useDebounce = (callback) =>
  useCallback(
    debounce((input) => {
      callback(input);
    }, DEBOUNCE_TIME),
    []
  );
export default useDebounce;
