import { FC, lazy } from "react";

const MainAsync = lazy<FC>(() => import("./Main"));

export default MainAsync;
