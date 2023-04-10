import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleList, ArticlesDetails } from "entities/Article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {  useParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsById } from "entities/Comment/model/services/fetchCommentsById/fetchCommentsById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { CommentList } from "entities/Comment";
import {
    getComments,
} from "entities/Comment/model/slice/CommentsSlice";
import { Text } from "shared/ui/Text/Text";
import { getCommentsIsLoading } from "entities/Comment/model/selectors/comments";
import { AddComment } from "features/CommentsForm";
import { addCommentForArticle } from "entities/Comment/model/services/addCommentForArticle/addCommentForArticle";
import {
    fetchArticleRecommendations,
    getArticleRecommendations,
    getArticleRecommendationsIsLoading,
} from "features/Recommendation";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { Page } from "widgets/Page";

interface ArticleDetailsPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-datails");
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getComments.selectAll);
    const commentsIsLoading = useSelector(getCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading
    );

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsById(id));
        dispatch(fetchArticleRecommendations());
    });
    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, [className])}>
                {t("Article not found")}
            </Page>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, [className])}>
                <ArticleDetailsPageHeader />
                <ArticlesDetails id={id} />
                <Text
                    size="size_16_14"
                    className={cls.commentTitle}
                    title={t("Рекомендуем")}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text className={cls.commentTitle} title={t("Комментарии")} />
                <AddComment onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
