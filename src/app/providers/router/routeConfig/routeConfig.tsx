import { AdminPanelPage } from "pages/AdminPanelPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { Main } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import {
    AppRoutes,
    getRouteMain,
    getRouteProfile,
    getRouteAdmin,
    getRouteForbidden,
} from "shared/const/router";
import { AppRoutesProps } from "shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    main: {
        path: getRouteMain(),
        element: <Main />,
    },
    profile: {
        path: getRouteProfile(":id"),
        element: <ProfilePage />,
        authOnly: true,
    },
    admin_panel: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: ["MANAGER", "ADMIN"],
    },
    forbidden: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    //last
    not_found: {
        path: "*",
        element: <NotFoundPage />,
    },
};
