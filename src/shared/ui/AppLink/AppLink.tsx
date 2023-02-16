import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { FC, PropsWithChildren } from "react";
import cls from "./AppLink.module.css";

export type AppLinkTheme = "primery" | "secondary";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {
        children,
        className,
        to,
        theme = "primery",
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
