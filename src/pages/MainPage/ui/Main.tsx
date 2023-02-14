import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation("main");

  return <div>{t("Главная страница")}</div>;
}
