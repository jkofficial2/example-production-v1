import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./NavbarItem.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { NavbarItemsType } from "../../module/types/navbar";

interface NavbarItemProps {
    item: NavbarItemsType;
}

export const NavbarItem = memo(({ item }: NavbarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            variant="secondary"
            to={item.path}
            className={classNames(cls.mainLink)}
        >
            {t(item.text)}
        </AppLink>
    );
});
