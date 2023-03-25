import { FC, lazy } from "react";

const ArticleDetailsPageAsync = lazy<FC>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import("./ArticleDetailsPage")), 500);
        })
);

export default ArticleDetailsPageAsync;
