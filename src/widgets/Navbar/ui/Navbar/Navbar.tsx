import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "features/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button } from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
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
                onClick={onToggleModal}
            >
                Войти
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi in provident veniam illo! At aliquam exercitationem
                dolorum, similique doloribus beatae libero labore impedit,
                eaque, delectus fugiat nulla nostrum itaque. Corporis?
            </Modal>
        </nav>
    );
};
