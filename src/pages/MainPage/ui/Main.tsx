import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./Main.module.scss";
import { ArticleWarningBlockComponent } from "entities/Article/ui/ArticleWarningBlockComponent/ArticleWarningBlockComponent";
import { Text } from "shared/ui/Text/Text";
import { VStack } from "shared/ui/Stack";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
interface MainProps {
    className?: string;
}

const Main = memo(({ className }: MainProps) => {
    const { t } = useTranslation("main");

    return (
        <VStack
            justify="center"
            align="center"
            className={classNames(cls.Main, [className])}
        >
            <VStack
                justify="center"
                align="center"
                className={classNames(cls.warning, [className])}
            >
                <Text
                    title={"WARNING!!!"}
                    align="center"
                    size="size_40_32"
                    className={classNames(cls.warningText, [className])}
                />
                <p className={classNames(cls.warningText, [className])}>
                    "Проект еще делается поэтому главная страница пустая, чтобы
                    посмотреть, что есть на проекте можете перейти в раздел{" "}
                    <AppLink to={RoutePath.articles} children={"Статьи"} /> или{" "}
                    <AppLink to={RoutePath.about} children={"О сайте"} /> или{" "}
                    <AppLink to={RoutePath.profile} children={"Профиль"} />"
                </p>
            </VStack>
        </VStack>
    );
});

export default Main;
