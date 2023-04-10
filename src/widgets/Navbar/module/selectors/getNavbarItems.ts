import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { NavbarItemsType } from "../types/navbar";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemsType[] = [
        {
            path: RoutePath.main,
            text: "Главная",
        },
        {
            path: RoutePath.about,
            text: "О сайте",
        },
    ];

    if (userData) {
        navbarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                text: "Профиль",
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: "Статьи",
                authOnly: true,
            }
        );
    }

    return navbarItemsList;
});
