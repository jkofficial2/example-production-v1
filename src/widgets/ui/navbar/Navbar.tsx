import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.css";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={classNames(cls.mainLink)}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
      <div className=""></div>
    </nav>
  );
};
