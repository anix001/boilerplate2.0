/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const IsValidUserHoc = () => {
  const location = useLocation();
  const { userValidationDetails } = useSelector(
    (state: any) => state.authReducer
  );
  return !!Object.keys(userValidationDetails).length ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default IsValidUserHoc;
