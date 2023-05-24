export type AppRoutes =
    | "main"
    | "about"
    | "not_found"
    | "profile"
    | "articles"
    | "article_details"
    | "article_create"
    | "article_edit"
    | "admin_panel"
    | "forbidden";

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => "/articles";
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => "/articles/new";
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => "/admin";
export const getRouteForbidden = () => "/forbidden";
