import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "features/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className="" data-testid="navbar">
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
                </div>
                <ThemeSwitcher />
                <LangSwitcher />
                <div className="" data-testid="navbar"></div>
            </nav>
        </div>
    );
};
