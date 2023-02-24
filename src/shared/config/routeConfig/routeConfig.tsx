import { About } from "pages/AboutPage";
import { Main } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export type AppRoutes = "main" | "about" | "not_found";

export const RoutePath: Record<AppRoutes, string> = {
    "main": "/",
    "about": "/about",
    "not_found": "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    "main": {
        path: RoutePath.main,
        element: <Main />,
    },
    "about": {
        path: RoutePath.about,
        element: <About />,
    },
    "not_found": {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
