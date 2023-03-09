import { FC, lazy } from "react";

const AboutAsync = lazy<FC>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import("./About")), 500);
        })
);

export default AboutAsync;
