import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticlesDetails } from "entities/Article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsById } from "features/Comments/model/services/fetchCommentsById/fetchCommentsById";
import { CommentsReducer } from "features/Comments";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { CommentList } from "entities/Comment";
import { getComments } from "features/Comments/model/slice/CommentsSlice";
import { Text } from "shared/ui/Text/Text";
import { getCommentsIsLoading } from "features/Comments/model/selectors/comments";

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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetailsPage, [className])}>
                <ArticlesDetails id={id} />
                <Text className={cls.commentTitle} title={t("Комментарии")} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />{" "}
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
