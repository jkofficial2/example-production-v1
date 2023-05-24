import { NavbarItemsType } from "../types/navbar";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "shared/const/router";

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemsType[] = [
        {
            path: getRouteMain(),
            text: "Главная",
        },
        {
            path: getRouteAbout(),
            text: "О сайте",
        },
    ];

    if (userData) {
        navbarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: "Профиль",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: "Статьи",
                authOnly: true,
            }
        );
    }

    return navbarItemsList;
});
