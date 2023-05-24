import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticlesPage.module.scss";
import { memo, useCallback } from "react";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page/ui/Page";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { articlesPageReducer } from "../../model/slices/articlesPageSlice";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
import { Text } from "shared/ui/Text/Text";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });
    if (error) {
        return <Text title={error} size="size_24_16" />;
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                isTriggerVisible={isLoading}
                className={classNames(cls.ArticlesPage, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
