import { Mods, classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo, useEffect } from "react";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye.svg";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./ArticleListItem.module.scss";
import {
    Article,
    ArticleTextBlock,
    ArticleType,
    ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Card } from "shared/ui/Card/Card";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageSelected } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/articlesPageSlice";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();
    const articleType = article.type as ArticleType[];
    const dispatch = useAppDispatch();
    const select = useSelector(getArticlesPageSelected);

    const handleClick = () => {
        const arr = select.split(",");
        if (!arr.includes(article.id)) {
            const string = [...arr, article.id].toString();
            dispatch(articlesPageActions.setSelected({ selectId: string }));
        } else {
            return null;
        }
    };
    const types = (
        <Text
            size="size_24_16"
            text={"Категория - " + articleType.join(", ")}
            className={cls.types}
        />
    );
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    console.log(select.includes(article.id), "select.includes(article.id)");

    const mods: Mods = {
        [cls.selected]: select.includes(article.id),
    };

    if (view === "LIST") {
        const textBlock = article.blocks.find(
            (block) => block.type === "TEXT"
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.ArticleListItem, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={classNames(cls.card, [className], mods)}>
                    <div className={cls.header}>
                        <Avatar size={60} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text
                        size="size_24_16"
                        align="center"
                        title={article.title}
                        className={cls.title}
                    />
                    {types}
                    <AppLink
                        target={target}
                        to={RoutePath.article_details + article.id}
                    >
                        <img
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                    </AppLink>
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button variant="backgroundTextBlack">
                                {t("Читать далее...")}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(
                cls.ArticleListItem,
                [className, cls[view]],
                mods
            )}
            id="visited"
            onClick={() => handleClick()}
        >
            <AppLink
                target={target}
                to={RoutePath.article_details + article.id}
            >
                <Card className={classNames(cls.card, [className], mods)}>
                    <div className={cls.imageWrapper}>
                        <img
                            alt={article.title}
                            src={article.img}
                            className={cls.img}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
});
