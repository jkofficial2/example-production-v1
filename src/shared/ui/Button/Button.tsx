import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Button.module.scss";

export type VariantButton = "clear" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const { className, children, variant, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
