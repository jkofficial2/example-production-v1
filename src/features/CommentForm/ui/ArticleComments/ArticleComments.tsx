import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleComments.module.scss";
import { AddComment, CommentList } from "entities/Comment";
import { getCommentsIsLoading } from "entities/Comment/model/selectors/comments/comments";
import { getComments } from "entities/Comment/model/slice/CommentsSlice/CommentsSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "entities/Comment/model/services/addCommentForArticle/addCommentForArticle";
import { useCallback } from "react";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page";
import { fetchArticleRecommendations } from "features/Recommendation";
import { fetchCommentsById } from "entities/Comment/model/services/fetchCommentsById/fetchCommentsById";

interface ArticleCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleComments = (props: ArticleCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const comments = useSelector(getComments.selectAll);
    const commentsIsLoading = useSelector(getCommentsIsLoading);

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
        <>
            <AddComment onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </>
    );
};
