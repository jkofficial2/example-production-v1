import { combineReducers } from "@reduxjs/toolkit";
import { CommentsReducer } from "entities/Comment";
import { articleDetailsPageRecommendationsReducer } from "features/Recommendation/model/slice/articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice";
import { ArticleDetailsPageSchema } from "../types";


export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsPageRecommendationsReducer,
        comments: CommentsReducer,
    });
