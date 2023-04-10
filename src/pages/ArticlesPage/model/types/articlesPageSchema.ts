import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleType, ArticleView } from "entities/Article";
import { ArticleSortField } from "features/ArticleSort";
import { SortOrder } from "shared/types/sort";

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    //filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    _inited: boolean;
    type: ArticleType;
}
