import { Mods, classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export type TextTheme = "primary" | "error" | "secondary";

type SizeText = "size_14_14" | "size_16_14" | "size_24_16" | "size_32_24" | "size_40_32";

export type TextAlign = "right" | "left" | "center";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextTheme;
    size?: SizeText;
    align?: TextAlign;
}
type HeaderTagType = "h1" | "h2" | "h3" | "p";

const mapSizeToHeaderTag: Record<SizeText, HeaderTagType> = {
    size_40_32: "h1",
    size_32_24: "h2",
    size_24_16: "h3",
    size_16_14: "p",
    size_14_14: "p",
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = "primary",
        size = "size_16_14",
        align = "left",
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[variant]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, [className], mods)}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
