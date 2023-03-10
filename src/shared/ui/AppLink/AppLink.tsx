import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { ReactNode, memo } from "react";
import cls from "./AppLink.module.scss";

export type AppLinkVariant = "primary" | "secondary";

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
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
});
