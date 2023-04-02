import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticlesPage.module.scss";
import { memo, useCallback } from "react";
import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
    getArticlesPageError,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page/ui/Page";
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    const onLoadNextPart = useCallback(async () => {
        await dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                isTriggerVisible={isLoading}
                className={classNames(cls.ArticlesPage, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
