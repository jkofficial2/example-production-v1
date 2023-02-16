import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.css";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "features/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "features/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={classNames(cls.navbar, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink
                    theme={"primery"}
                    to={"/"}
                    className={classNames(cls.mainLink)}
                >
                    Main
                </AppLink>
                <AppLink theme={"secondary"} to={"/about"}>
                    About
                </AppLink>
            </div>
            <ThemeSwitcher />
            <LangSwitcher />
            <div className=""></div>
        </nav>
    );
};
