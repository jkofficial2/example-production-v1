import { CommentsSchema } from "entities/Comment";
import { ArticleDetailsRecommendationsSchema } from "features/Recommendation/model/types/ArticleDetailsRecommendationsSchema";


export interface ArticleDetailsPageSchema {
    comments: CommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
