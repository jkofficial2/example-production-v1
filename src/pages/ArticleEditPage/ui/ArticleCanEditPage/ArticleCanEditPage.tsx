import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleCanEditPage.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getArticleDetailsData } from "entities/Article";
import {
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from "entities/Article/model/selectors/articleDetails";
import { useSelector } from "react-redux";

interface ArticleCanEditPageProps {
    className?: string;
    id: string;
}

export const ArticleCanEditPage = (props: ArticleCanEditPageProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    // useInitialEffect(() => {});
    return (
        <div className={classNames(cls.ArticleCanEditPage, [className])}></div>
    );
};
