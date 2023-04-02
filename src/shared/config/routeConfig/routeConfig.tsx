import { About } from "pages/AboutPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
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
    | "articles_details";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
    main: "/",
    about: "/about",
    profile: "/profile/", //+ :id
    articles: "/articles",
    articles_details: "/articles/", //+ :id

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
        path: RoutePath.profile + ":id",
        element: <ProfilePage />,
        authOnly: true,
    },
    articles: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    articles_details: {
        path: RoutePath.articles_details + ":id",
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    //last
    not_found: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
