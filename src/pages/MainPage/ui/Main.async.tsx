import { FC, lazy } from "react";

const MainAsync = lazy<FC>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import("./Main")), 500);
        })
);

export default MainAsync;
