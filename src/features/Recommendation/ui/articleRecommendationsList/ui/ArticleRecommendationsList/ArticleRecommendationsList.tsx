import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article";
import { VStack } from "shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/aritcleRecommendationsApi";

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack gap="8" className={classNames("", [className])}>
                <Text size="size_24_16" title={t("Рекомендуем")} />
                <ArticleList
                    articles={articles}
                    target="_blank"
                />
            </VStack>
        );
    }
);