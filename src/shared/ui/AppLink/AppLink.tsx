import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { FC, PropsWithChildren } from "react";
import cls from "./AppLink.module.scss";

export type AppLinkVariant= "primary" | "secondary";

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {
        children,
        className,
        to,
        variant = "primary",
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
