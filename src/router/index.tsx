import * as React from "react";
import { Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import IntermediateRoutes from "./IntermediateRoutes";

const Router = (
  <Routes>
    {PublicRoutes}
    {PrivateRoutes}
    {IntermediateRoutes}
  </Routes>
);

export default Router;
