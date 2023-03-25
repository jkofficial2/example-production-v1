import { Mods, classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Icon.module.scss";
import { ReactNode, memo } from "react";

interface IconProps {
    className?: string;
    src?: string;
    size?:
        | "default"
        | "size_xs"
        | "size_s"
        | "size_m"
        | "size_l"
        | "size_lg"
        | "size_xl"
        | "size_2xl";

    alt?: string;
    children?: ReactNode;
}

export const Icon = memo((props: IconProps) => {
    const {
        src,
        size = "size_m",
        className,
        alt,
        children,
        ...otherProps
    } = props;

    const mods: Mods = {};

    return (
        <i
            className={classNames(cls.Icon, [className, cls[size]], mods)}
            {...otherProps}
        >
            {typeof src === "string" ? <img src={src} alt={alt} /> : null}
            {children}
        </i>
    );
});
