import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUserInfo } from "store/User/userSlice";

const withAuth =
  (WrappedComponent) =>
  ({ ...restParams }) => {
    const RenderComponent = () => {
      const location = useLocation();
      const dispatch = useDispatch();
      console.log(location);
      useEffect(() => {
        dispatch(fetchUserInfo());
      }, [location]);

      return <WrappedComponent {...restParams} />;
    };
    return <RenderComponent />;
  };

export default withAuth;
