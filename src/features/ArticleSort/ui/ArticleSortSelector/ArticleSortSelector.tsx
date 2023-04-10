import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import Select from "shared/ui/Select/Select";
import cls from "./ArticleSortSelector.module.scss";
import { ArticleSortField } from "features/ArticleSort";
import { SortOrder } from "shared/types/sort";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<
        Array<
            TupleToObject<{
                value: SortOrder;
                content: string;
            }>
        >
    >(
        () => [
            {
                value: "asc",
                content: t("возрастанию"),
            },
            {
                value: "desc",
                content: t("убыванию"),
            },
        ],
        [t]
    );

    const sortFieldOptions = useMemo<
        Array<
            TupleToObject<{
                value: ArticleSortField;
                content: string;
            }>
        >
    >(
        () => [
            {
                value: "creaderAt",
                content: t("дате создания"),
            },
            {
                value: "title",
                content: t("названию"),
            },
            {
                value: "views",
                content: t("просмотрам"),
            },
        ],
        [t]
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, [className])}>
            <Select
                options={sortFieldOptions}
                label={t("Сортировать ПО")}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t("по")}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
