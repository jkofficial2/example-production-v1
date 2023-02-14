import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.css";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.PRIMERY}
          to={"/"}
          className={classNames(cls.mainLink)}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
      <ThemeSwitcher />
      <LangSwitcher />
      <div className=""></div>
    </nav>
  );
};
