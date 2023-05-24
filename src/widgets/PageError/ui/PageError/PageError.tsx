import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./PageError.module.scss";

import { Button } from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, [className])}>
            <h2>{("Произошла непредвиденная ошибка")}</h2>
            <Button variant="outline" onClick={reloadPage}>
                {("Обновить страницу")}
            </Button>
        </div>
    );
};
