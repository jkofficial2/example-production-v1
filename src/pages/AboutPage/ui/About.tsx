import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Code } from "shared/ui/Code/Code";
import { HStack } from "shared/ui/Stack";
import cls from "./About.module.scss";
import { Text } from "shared/ui/Text/Text";

interface AboutProps {
    className?: string;
}
const About = memo(({ className }: AboutProps) => {
    const { t } = useTranslation("about");

    return (
        <div className={classNames(cls.About, [className])}>
            <HStack
                justify="center"
                align="start"
                className={classNames(cls.title, [className])}
            >
                <Text size="size_40_32" title={t("Мой план")} />
            </HStack>
            <Text
                size="size_40_32"
                title={t("Карта продвижения")}
                className={classNames(cls.title, [className])}
            />
            <Text
                size="size_32_24"
                align="left"
                title={t("Февраль 2023")}
                text={t("Этап первый")}
                className={classNames(cls.title, [className])}
            />
            <HStack
                justify="between"
                align="start"
                gap="32"
                className={classNames(cls.title, [className])}
            >
                <Text
                    size="size_24_16"
                    align="left"
                    title={t(
                        "Цель - сделать продукт, который сможет покрыть большинство потребностей для проектов. Сделать фундамент и основу, так чтобы можно было спокойно взять файл и менять по сути только верстку. Универсальный скелет - UI kit, hooks, FSD architecture"
                    )}
                    className={classNames(cls.februaryText, [className])}
                />
                <Code
                    className={classNames(cls.februaryCode, [className])}
                    text={
                        '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
                    }
                />
            </HStack>
            <Text
                size="size_32_24"
                align="left"
                title={t("Март 2023")}
                text={t("Этап второй")}
                className={classNames(cls.title, [className])}
            />
            <HStack
                justify="between"
                align="start"
                gap="32"
                className={classNames(cls.title, [className])}
            >
                <div className={classNames(cls.marchText, [className])}>
                    <Text
                        size="size_24_16"
                        align="left"
                        title={t(
                            "Цель - сделать грамотную архитектуру проекта, чтобы потом не возращаться к нему. Что сделал за месяц: Code splitting, Router, App Layout, eslint, Storybook, UI tests, unit tests и это не все."
                        )}
                        className={classNames(cls.marchText, [className])}
                    />
                    <p className={classNames(cls.marchText, [className])}>
                        Идея - подумал, что будет прекрасно сделать Pet-project,
                        который будет похож на{" "}
                        <AppLink to={"https://habr.com/"}>habr.com</AppLink>.
                        Так как я один на проекте, буду использовать i18n, чтобы
                        сделать интернационализацию.
                    </p>
                    <p className={classNames(cls.marchText, [className])}>
                        Обновление - сделать регистрацию, раздел "Профиль",
                        добавить разные роли, возможность редактировать.
                    </p>
                    <p className={classNames(cls.marchText, [className])}>
                        Обновление два - сделать раздел статьи, возможность
                        поменять вид карточек, посмотреть эту карточку, написать
                        комментарий.
                    </p>
                </div>
                <Code
                    className={classNames(cls.marchCode, [className])}
                    text={
                        'export default function buildWebpackConfig(\n    options: BuildOptions\n): webpack.Configuration {\n    const { paths, mode, isDev } = options;\n\n    return {\n        mode,\n        entry: paths.entry,\n        output: {\n            filename: "[name].[contenthash].js",\n            path: paths.build,\n            clean: true,\n            publicPath: "/",\n        &rbrace;,\n        module: {\n            rules: buildLoaders(options),\n        &rbrace;,\n        resolve: buildResolve(options),\n        plugins: buildPlugins(options),\n        devtool: isDev ? "inline-source-map" : undefined,\n\n        devServer: isDev ? buildDevServer(options) : undefined,\n        optimization: buildOptimization(),\n        cache: true,\n    {\n {\n '
                    }
                />
            </HStack>
            <Text
                size="size_32_24"
                align="left"
                title={t("Апрель 2023")}
                text={t("Этап первый")}
                className={classNames(cls.title, [className])}
            />

            <HStack
                justify="between"
                gap="32"
                className={classNames(cls.title, [className])}
            >
                <div className={classNames(cls.marchText, [className])}>
                    <Text
                        size="size_24_16"
                        align="left"
                        title={t(
                            "Цель - сделать раздел рекомендации в статей, возможность посмотреть профиль комментатора и автора статьи. Бесконечный скролл, возможность сохранения позиции скролла, сделать виртуализацию, написать плагин для поддержки FSD архитектуры.(eslint-plugin-fsd-checker)"
                        )}
                        className={classNames(cls.aprilText, [className])}
                    />
                    <p className={classNames(cls.marchText, [className])}>
                        Обновление - залить в Vercel проект(netlify)
                    </p>
                    <p className={classNames(cls.marchText, [className])}>
                        Обновление 2 - перед тем как залить в Vercel, нужно
                        сделать приятный (на скорую руку) дизайн сайта, а то
                        как-то стыдно будет кидать ссылку своим друзьям)).
                        Начать писать свой полноценный UI kit, чтобы не
                        использовать css(scss), достичь цели "верстка как Lego".
                    </p>
                </div>
                <Code
                    className={classNames(cls.aprilCode, [className])}
                    text={
                        '...\nconst layers = {\n    entities: "entities",\n    features: "features",\n    shared: "shared",\n    pages: "pages",\n    widgets: "widgets",\n};\n\nfunction shouldBeRelative(from, to) {\n    if (isPathRelative(to)) {\n        return false;\n    }\n\n    // example entities/Article\n    const toArray = to.split("/");\n    const toLayer = toArray[0]; // entities\n    const toSlice = toArray[1]; // Article\n\n    if (!toLayer || !toSlice || !layers[toLayer]) {\n        return false;\n    }\n\n    const fromNormalizedPath = path.toNamespacedPath(from);\n    const fromPath = fromNormalizedPath.split("src")[1];\n    const fromArray = fromPath.split(/\\|//);\n    const fromLayer = fromArray[1]; // entities\n    const fromSlice = fromArray[2]; // Article\n    if (!fromLayer || !fromSlice || !layers[fromLayer]) {\n        return false;\n    }\n\n    return fromSlice === toSlice && toLayer === fromLayer;\n}\n'
                    }
                />
            </HStack>
        </div>
    );
});

export default About;
