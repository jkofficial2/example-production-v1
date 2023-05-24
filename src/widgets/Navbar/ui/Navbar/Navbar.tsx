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
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "entities/User";
import { useSelector } from "react-redux";
import { getNavbarItems } from "../../module/selectors/getNavbarItems";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { Text } from "shared/ui/Text/Text";
import { HStack } from "shared/ui/Stack";
import { AvatarDropdown } from "features/AvatarDropdown";
import { NotificationButton } from "features/NotificationButton";
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
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

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

    const isAdminPanelAvailable = isAdmin || isManager;

    // return (
    //     <Suspense fallback="">
    //         <nav
    //             className={classNames(cls.Navbar, [className])}
    //             data-testid="navbar"
    //         >
    //             <div className={classNames(cls.links)}>{itemsList}</div>
    //             <div className={classNames(cls.navbarRight)}>
    //                 <Text
    //                     className={cls.appName}
    //                     variant="secondary"
    //                     title={t("IHabr")}
    //                 />
    //                 <AppLink
    //                     to={RoutePath.article_create}
    //                     className={cls.createBtn}
    //                     variant="secondary"
    //                 >
    //                     {t("Создать статью")}
    //                 </AppLink>
    //                 <ThemeSwitcher />
    //                 <LangSwitcher />
    //                 {authData ? (
    //                     <DropDown
    //                         isOpen={isCloseMenu}
    //                         direction="bottom left"
    //                         onClick={onCloseMenu}
    //                         isTrue={!isAuthModal}
    //                         items={[
    //                             ...(isAdminPanelAvailable
    //                                 ? [
    //                                     {
    //                                         content: t("Админка"),
    //                                         href: RoutePath.admin_panel,
    //                                     },
    //                                 ]
    //                                 : []),
    //                             {
    //                                 content: t("Профиль"),
    //                                 href: RoutePath.profile + authData.id,
    //                             },
    //                             {
    //                                 content: t("Выйти"),
    //                                 onClick: onLogout,
    //                             },
    //                         ]}
    //                         trigger={
    //                             <Icon
    //                                 src={authData?.avatar}
    //                                 size="size_2xl"
    //                                 className={cls.avatar}
    //                             />
    //                         }
    //                     />
    //                 ) : (
    //                     <Button
    //                         variant="backgroundInverted"
    //                         className={cls.links}
    //                         onClick={onShowModal}
    //                     >
    //                         {t("Войти")}
    //                     </Button>
    //                 )}
    //             </div>
    //             {isAuthModal && (
    //                 <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    //             )}
    //         </nav>
    //     </Suspense>
    // );
    if (authData) {
        return (
            <header className={classNames(cls.Navbar, [className])}>
                <Text
                    className={cls.appName}
                    title={t("IHabr")}
                    variant="secondary"
                />
                {/* <AppLink
                    to={getRouteArticleCreate()}
                    variant="secondary"
                    className={cls.createBtn}
                >
                    {t("Создать статью")}
                </AppLink> */}
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, [className])}>
            <Button
                variant="outline"
                className={cls.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
