import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    ReducersMapObject,
    Reducer,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { CommentsSchema } from "entities/Comment/model/types/CommentsSchema";
import { ProfileSchema } from "features/EditableProfileCard";
import { AddCommentSchema } from "features/CommentsForm";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { saveScrollSchema } from "widgets/Page";

export interface StateSchema {
    user: UserSchema;
    saveScroll: saveScrollSchema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    Comments?: CommentsSchema;
    addComment?: AddCommentSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
