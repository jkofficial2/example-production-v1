import { FunctionComponent } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
export interface NavbarItemsType {
    path: string;
    text: string;
    Icon?: FunctionComponent<React.SVGAttributes<SVGAElement>>;
    authOnly?: boolean;
}

export const NavbarItemsList: NavbarItemsType[] = [
    {
        path: RoutePath.main,
        text: "Главная",
    },
    {
        path: RoutePath.about,
        text: "О нас",
    },
    {
        path: RoutePath.profile,
        text: "Профиль",
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: "Статьи",
        authOnly: true,
    },
];
