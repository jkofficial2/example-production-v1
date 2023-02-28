import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "features/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useCallback, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    return (
        <nav
            data-testid="navbar"
            className={classNames(cls.Navbar, [className])}
        >
            <div className={classNames(cls.links)}>
                <AppLink
                    variant={"primary"}
                    to={RoutePath.main}
                    className={classNames(cls.mainLink)}
                >
                    Main
                </AppLink>
                <AppLink variant={"secondary"} to={RoutePath.about}>
                    About
                </AppLink>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <Button
                variant="backgroundInverted"
                className={cls.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </nav>
    );
};
