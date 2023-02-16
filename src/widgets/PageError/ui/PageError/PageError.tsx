import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./PageError.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage =() =>{
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, [className])}>
            <h2>{t("Произошла непредвиденная ошибка")}</h2>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};
