import {
    ButtonHTMLAttributes,
    FC,
    PropsWithChildren,
    ReactNode,
    memo,
} from "react";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Button.module.scss";

export type ButtonVariant =
    | "clear"
    | "outline"
    | "background"
    | "backgroundInverted";

export type ButtonSize =
    | "size_default"
    | "size_s"
    | "size_m"
    | "size_l"
    | "size_xl";

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

//!Подумать как правильнее исполтзовать паддинги
export type ButtonPadding =
    | "padding_s"
    | "padding_m"
    | "padding_l"
    | "padding_xl";

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
    size?: ButtonSize;
    border?: ButtonBorder;
    padding?: ButtonPadding;
    fontSize?: ButtonFont;
    disabled?: boolean;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant,
        radius,
        size = "size_l",
        border = "border_none",
        padding = "padding_l",
        fontSize = "font_m",
        disabled,
        ...otherProps
    } = props;
    const mods = {
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
                    cls[size],
                    cls[border],
                    cls[padding],
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
});
