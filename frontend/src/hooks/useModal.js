import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useModal = (props) => {
  const { isMounted } = props;
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      setShouldRender(false);
    }
  }, [isMounted]);
  return {
    shouldRender,
  };
};

useModal.propTypes = {
  isMounted: PropTypes.bool,
};

export default useModal;
