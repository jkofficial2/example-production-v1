import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername";
import { ReducersList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "features/EditableProfileCard/model/slice/profileSlice";
import { addCommentReducer } from "entities/Comment/model/slice/addCommentSlice/addCommentSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addComment: addCommentReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
        (StoryComponent: Story) =>
            (
                <StoreProvider
                    initialState={state}
                    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            );
