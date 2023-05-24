export type AppRoutes =
    | "main"
    | "not_found"
    | "profile"
    | "admin_panel"
    | "forbidden";

export const getRouteMain = () => "/";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteAdmin = () => "/admin";
export const getRouteForbidden = () => "/forbidden";
