import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<
        Array<TupleToObject<{ value: ArticleType; content: string }>>
    >(
        () => [
            {
                value: "ALL",
                content: t("Все статьи"),
            },
            {
                value: "IT",
                content: t("Айти"),
            },
            {
                value: "ECONOMICS",
                content: t("Экономика"),
            },
            {
                value: "SCIENCE",
                content: t("Наука"),
            },
        ],
        [t]
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType]
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames("", [className])}
        />
    );
});
