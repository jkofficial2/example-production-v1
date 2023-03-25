import { Mods, classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export type TextTheme = "primary" | "error";

type SizeText = "size_14" | "size_16" | "size_24" | "size_32" | "size_40";

export type TextAlign = "right" | "left" | "center";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    size?: SizeText;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = "primary",
        size = "size_16",
        align = "left",
    } = props;
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, [className], mods)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
