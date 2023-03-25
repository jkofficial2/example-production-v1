import { StateSchema } from "app/providers/StoreProvider";

export const getCommentsIsLoading = (state: StateSchema) =>
    state.Comments?.isLoading;
export const getCommentsError = (state: StateSchema) =>
    state.Comments?.error;
