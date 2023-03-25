import { classNames } from "shared/lib/ClassNames/ClassNames";
import { memo, useCallback } from "react";
import { Button } from "shared/ui/Button/Button";
import CopyIcon from "shared/assets/icons/copy.svg";
import cls from "./Code.module.scss";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                variant="backgroundInverted"
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
