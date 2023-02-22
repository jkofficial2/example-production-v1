import { FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
    const { t } = useTranslation("about");

    return <div>{t("Страница о нас")}</div>;
};

export default About;
