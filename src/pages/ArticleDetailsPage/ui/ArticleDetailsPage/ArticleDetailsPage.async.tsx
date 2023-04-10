import { FC, lazy } from "react";

const ArticleDetailsPageAsync = lazy<FC>(() => import("./ArticleDetailsPage"));

export default ArticleDetailsPageAsync;
