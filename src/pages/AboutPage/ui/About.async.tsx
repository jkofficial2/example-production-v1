import { FC, lazy } from "react";

const AboutAsync = lazy<FC>(() => import("./About"));

export default AboutAsync;
