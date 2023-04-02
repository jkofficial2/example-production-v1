import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticlesDetails } from "entities/Article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useNavigate, useParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsById } from "entities/Comment/model/services/fetchCommentsById/fetchCommentsById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { CommentList } from "entities/Comment";
import {
    CommentsReducer,
    getComments,
} from "entities/Comment/model/slice/CommentsSlice";
import { Text } from "shared/ui/Text/Text";
import { getCommentsIsLoading } from "entities/Comment/model/selectors/comments";
import { AddComment } from "features/CommentsForm";
import { addCommentForArticle } from "entities/Comment/model/services/addCommentForArticle/addCommentForArticle";
import { Button } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleDetailsPageProps {
    className?: string;
}
const reducers: ReducersList = {
    Comments: CommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-datails");
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getComments.selectAll);
    const commentsIsLoading = useSelector(getCommentsIsLoading);
    const navigate = useNavigate();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsById(id));
    });
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, [className])}>
                {t("Article not found")}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, [className])}>
                <Button variant="backgroundInverted" onClick={onBackToList}>
                    {t("Назад к списку")}
                </Button>
                <ArticlesDetails id={id} />
                <Text className={cls.commentTitle} title={t("Комментарии")} />
                <AddComment onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
