import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Button.module.css";

export type ThemeButton = "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
