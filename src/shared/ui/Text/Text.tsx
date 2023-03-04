import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export type TextTheme = "primary" | "error";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
    const { className, text, title, theme = "primary" } = props;

    return (
        <div
            className={classNames(cls.Text, [className], {
                [cls[theme]]: true,
            })}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
