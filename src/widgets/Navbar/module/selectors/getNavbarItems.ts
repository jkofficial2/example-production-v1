import { NavbarItemsType } from "../types/navbar";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { getRouteMain, getRouteProfile } from "shared/const/router";

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemsType[] = [
        {
            path: getRouteMain(),
            text: "Главная",
        },
    ];

    if (userData) {
        navbarItemsList.push({
            path: getRouteProfile(userData.id),
            text: "Профиль",
            authOnly: true,
        });
    }

    return navbarItemsList;
});
