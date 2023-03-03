import { useTranslation } from "react-i18next";
import { memo } from "react";

const Main = memo(() => {
    const { t } = useTranslation("main");

    return (
        <div>
            {t("Главная страница")}
        </div>
    );
});

export default Main;
