import { FC, lazy } from "react";

const ArticlesPageAsync = lazy<FC>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import("./ArticlesPage")), 500);
        })
);

export default ArticlesPageAsync;
