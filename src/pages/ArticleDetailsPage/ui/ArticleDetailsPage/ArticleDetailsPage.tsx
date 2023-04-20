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
import {
    ArticleRecommendationsList,
} from "features/Recommendation";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { Page } from "widgets/Page";
import { ArticleComments } from "features/CommentForm";

interface ArticleDetailsPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-datails");
    const { id } = useParams<{ id: string }>();

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, [className])}>
                {/* <VStack gap="16" max> */}
                <ArticleDetailsPageHeader />
                <ArticlesDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleComments id={id} />
                {/* </VStack> */}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
