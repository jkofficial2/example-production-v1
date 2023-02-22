import { useTranslation } from "react-i18next";
import { BugButton } from "app/provider/ErrorBoundary";
import { FC } from "react";

const Main: FC = () => {
    const { t } = useTranslation("main");

    return (
        <div>
            {t("Главная страница")}
            <BugButton />
        </div>
    );
};

export default Main;
