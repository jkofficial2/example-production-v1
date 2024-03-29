import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === "TILE" ? 4 : 14)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={item + index}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = "TILE", isLoading, target } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, [className, cls[view]])}
            >
                <Text size="size_16_14" title={t("Статьи не найдены")} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {articles.length < 1 && isLoading ? getSkeletons(view) : null}
        </div>
    );
});
