import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || "TILE";
export const getArticlesPageNum = (state: StateSchema) =>
    state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited;
export const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order ?? "asc";
export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort ?? "creaderAt";
export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search ?? "";
export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? "ALL";
export const getArticlesPageSelected = (state: StateSchema) =>
    state.articlesPage?.selected ?? "";
