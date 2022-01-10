import { useCallback } from "react";
import { useHistory } from "react-router";

const useNotReady = () => {
  const history = useHistory();

  const goNotReadyPage = useCallback(() => {
    history.push("/not-ready");
  }, []);

  const goBack = useCallback(() => {
    history.goBack();
  }, []);

  return { goNotReadyPage, goBack };
};

useNotReady.propTypes = {};

export default useNotReady;
