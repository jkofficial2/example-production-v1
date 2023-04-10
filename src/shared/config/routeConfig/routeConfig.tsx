import { About } from "pages/AboutPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { Main } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export type AppRoutes =
    | "main"
    | "about"
    | "not_found"
    | "profile"
    | "articles"
    | "article_details"
    | "article_create"
    | "article_edit";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
    main: "/",
    about: "/about",
    profile: "/profile/", //+ :id
    articles: "/articles",
    article_details: "/articles/", //+ :id
    article_create: "/articles/new",
    article_edit: "/articles/:id/edit",

    //last
    not_found: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    main: {
        path: RoutePath.main,
        element: <Main />,
    },
    about: {
        path: RoutePath.about,
        element: <About />,
    },
    profile: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    articles: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    article_details: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    article_create: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    article_edit: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    //last
    not_found: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
