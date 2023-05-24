import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { getCanEditArticle } from "../../model/selectors/article";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { getRouteArticleEdit, getRouteArticles } from "shared/const/router";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);
        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article, navigate]);

        return (
            <div
                className={classNames(cls.ArticleDetailsPageHeader, [
                    className,
                ])}
            >
                <Button variant="backgroundInverted" onClick={onBackToList}>
                    <p>{t("Назад к списку")}</p>
                </Button>
                {canEdit && (
                    <Button
                        className={cls.editBtn}
                        variant="backgroundInverted"
                        onClick={onEditArticle}
                    >
                        <p>{t("Редактировать")}</p>
                    </Button>
                )}
            </div>
        );
    }
);
