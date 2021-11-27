import React, { useEffect, useState } from "react";

const useAnimation = (props) => {
  const { delay } = props;
  const [isMounted, setIsMounted] = useState(false);
  const [animation, setAnimation] = useState(false);

  const unMountAfterDelay = () => {
    setTimeout(() => {
      setIsMounted(false);
    }, delay);
  };
  const onAnimation = () => {
    setAnimation(true);
  };
  const unMount = () => {
    setAnimation(false);
    unMountAfterDelay();
  };

  useEffect(() => {
    if (isMounted && !animation) {
      onAnimation();
    }
  }, [isMounted]);
  return { animation, isMounted, unMountAfterDelay, onAnimation, unMount, setIsMounted };
};

export default useAnimation;
