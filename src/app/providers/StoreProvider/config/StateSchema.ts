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
import { ProfileSchema } from "features/EditableProfileCard";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { saveScrollSchema } from "widgets/Page";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage/model/types";
import { rtkApi } from "shared/api/rtkApi";
import { AddCommentSchema } from "entities/Comment";

export interface StateSchema {
    user: UserSchema;
    saveScroll: saveScrollSchema;

    // Асинхронные редюсеры
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addComment?: AddCommentSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;

    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
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
