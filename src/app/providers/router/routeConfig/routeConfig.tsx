import { About } from "pages/AboutPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { Main } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { AppRoutes, getRouteMain, getRouteAbout, getRouteProfile, getRouteArticles, getRouteArticleDetails, getRouteArticleCreate, getRouteArticleEdit, getRouteAdmin, getRouteForbidden } from "shared/const/router";
import { AppRoutesProps } from "shared/types/router";


export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    main: {
        path: getRouteMain(),
        element: <Main />,
    },
    about: {
        path: getRouteAbout(),
        element: <About />,
    },
    profile: {
        path: getRouteProfile(":id"),
        element: <ProfilePage />,
        authOnly: true,
    },
    articles: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    article_details: {
        path: getRouteArticleDetails(":id"),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    article_create: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    article_edit: {
        path: getRouteArticleEdit(":id"),
        element: <ArticleEditPage />,
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
