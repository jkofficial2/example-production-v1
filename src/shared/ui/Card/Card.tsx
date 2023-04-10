import { classNames } from "shared/lib/ClassNames/ClassNames";
import { HTMLAttributes, memo, ReactNode } from "react";
import cls from "./Card.module.scss";

export type CardTheme = "normal" | "outlined";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const { className, children, theme = "normal", ...otherProps } = props;

    return (
        <div
            className={classNames(cls.Card, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
