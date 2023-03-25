import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./Main.module.scss";

interface MainProps {
    className?: string;
}
const Main = memo(({ className }: MainProps) => {
    const { t } = useTranslation("main");

    return (
        <div className={classNames(cls.Main, [className])}>
            {t("Главная страница")}
        </div>
    );
});

export default Main;
