import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";

import { Comment } from "entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { CommentsSchema } from "../types/CommentsSchema";
import { fetchCommentsById } from "../services/fetchCommentsById/fetchCommentsById";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const CommentsSlice = createSlice({
    name: "CommentsSlice",
    initialState: commentsAdapter.getInitialState<CommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsById.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchCommentsById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: CommentsReducer } = CommentsSlice;
