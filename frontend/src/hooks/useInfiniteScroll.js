import React, { useState, useEffect } from "react";

const useInfiniteScroll = (intersectRef, optionsObject) => {
  const { _root = null, _rootMargin = "0px", _threshold } = optionsObject;

  const [isIntersect, setIsIntersect] = useState(false);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersect(true);
    } else {
      setIsIntersect(false);
    }
  };
  const options = {
    root: _root,
    rootMargin: _rootMargin,
    threshold: _threshold,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => observer.disconnect();
  }, []);
  return {
    isIntersect,
  };
};

export default useInfiniteScroll;
