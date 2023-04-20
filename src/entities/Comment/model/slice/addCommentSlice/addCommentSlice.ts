import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentSchema } from "../../types/CommentsSchema";

const initialState: AddCommentSchema = {
    text: "",
};

export const addCommentSlice = createSlice({
    name: "addComment",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
