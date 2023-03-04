import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { memo } from "react";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            variant="clear"
            className={classNames(cls.LangSwitcher, [className])}
            onClick={toggle}
        >
            {i18n.language === "ru" ? t("EN") : t("RU")}
        </Button>
    );
});
