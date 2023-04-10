import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import { Mods, classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Button.module.scss";

export type ButtonVariant =
    | "clear"
    | "outline"
    | "background"
    | "backgroundInverted"
    | "backgroundTextBlack";

export type ButtonSize =
    | "size-padding_default"
    | "size-padding_4_16"
    | "size-padding_8_16"
    | "size-padding_8_24"
    | "size-padding_12_24"
    | "size-padding_12_32"
    | "size-padding_16_32";

export type ButtonRaduis =
    | "radius_none"
    | "radius_s"
    | "radius_l"
    | "radius_xl"
    | "radius_2xl";

export type ButtonBorder =
    | "border_none"
    | "border_1px"
    | "border_2px"
    | "border_4px";

export type ButtonFont =
    | "font_s"
    | "font_m"
    | "font_l"
    | "font_xl"
    | "font_2xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant: ButtonVariant;
    radius?: ButtonRaduis;
    border?: ButtonBorder;
    size?: ButtonSize;
    fontSize?: ButtonFont;
    disabled?: boolean;
    children: ReactNode;
    disbled?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        variant,
        radius = "radius_l",
        border = "border_none",
        fontSize = "font_m",
        size = "size-padding_4_16",
        disabled,
        ...otherProps
    } = props;
    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                [
                    className,
                    cls[variant],
                    cls[radius],
                    cls[border],
                    cls[size],
                    cls[fontSize],
                ],
                mods
            )}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
