import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.scss";
import { LangSwitcher } from "features/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData, userActions } from "entities/User";
import { useSelector } from "react-redux";
import { getNavbarItems } from "../../module/selectors/getNavbarItems";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import Logo from "shared/assets/icons/logo2.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Text } from "shared/ui/Text/Text";
interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const navbarItemsList = useSelector(getNavbarItems);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    useEffect(() => {
        if (authData) {
            setIsAuthModal(false);
        }
    }, [authData]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const itemsList = useMemo(
        () =>
            navbarItemsList.map((item) => (
                <NavbarItem item={item} key={item.path} />
            )),
        [navbarItemsList]
    );
    return (
        <nav className={classNames(cls.Navbar, [className])} data-testid="navbar">
            <div className={classNames(cls.links)}>{itemsList}</div>
            <div className={classNames(cls.navbarRight)}>
                <Text
                    className={cls.appName}
                    variant="secondary"
                    title={t("IHabr")}
                />
                <AppLink
                    to={RoutePath.article_create}
                    className={cls.createBtn}
                    variant="secondary"
                >
                    {t("Создать статью")}
                </AppLink>
                <ThemeSwitcher />
                <LangSwitcher />
                {authData ? (
                    <Button
                        variant="backgroundInverted"
                        className={cls.links}
                        onClick={onLogout}
                    >
                        {t("Выйти")}
                    </Button>
                ) : (
                    <Button
                        variant="backgroundInverted"
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t("Войти")}
                    </Button>
                )}
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </nav>
    );
});
