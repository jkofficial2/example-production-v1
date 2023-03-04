import { RoutePath } from "shared/config/routeConfig/routeConfig";
export interface NavbarItemsType {
    path: string;
    text: string;
    Icon?: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
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
    },
];
