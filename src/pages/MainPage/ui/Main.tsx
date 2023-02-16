import { useTranslation } from "react-i18next";
import { BugButton } from "app/provider/ErrorBoundary";

export default function Main() {
    const { t } = useTranslation("main");

    return (
        <div>
            {t("Главная страница")}
            <BugButton />
        </div>
    );
}
