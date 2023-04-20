import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.scss";
import { LangSwitcher } from "entities/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "entities/ThemeSwitcher";
import {
    Suspense,
    memo,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData, userActions } from "entities/User";
import { useSelector } from "react-redux";
import { getNavbarItems } from "../../module/selectors/getNavbarItems";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { Icon } from "shared/ui/Icon/Icon";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Text } from "shared/ui/Text/Text";
import { DropDown } from "shared/ui/DropDown/DropDown";
interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isCloseMenu, setisCloseMenu] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const navbarItemsList = useSelector(getNavbarItems);

    const onCloseMenu = useCallback(() => {
        setisCloseMenu(!isCloseMenu);
    }, [isCloseMenu]);

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
        <Suspense fallback="">
            <nav
                className={classNames(cls.Navbar, [className])}
                data-testid="navbar"
            >
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
                        <DropDown
                            isOpen={isCloseMenu}
                            direction="bottom left"
                            onClick={onCloseMenu}
                            isTrue={!isAuthModal}
                            items={[
                                {
                                    content: "Выйти",
                                    onClick: onLogout,
                                },
                            ]}
                            trigger={
                                <Icon
                                    src={authData?.avatar}
                                    size="size_2xl"
                                    className={cls.avatar}
                                />
                            }
                        />
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
        </Suspense>
    );
});
