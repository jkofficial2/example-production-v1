import { FC, lazy } from "react";

const ArticlesPageAsync = lazy<FC>(() => import("./ArticlesPage"));

export default ArticlesPageAsync;
