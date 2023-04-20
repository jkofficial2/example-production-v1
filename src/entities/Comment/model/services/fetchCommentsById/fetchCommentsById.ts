import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentProps } from "../../types/CommentsSchema";

export const fetchCommentsById = createAsyncThunk<
    CommentProps[],
    string | undefined,
    ThunkConfig<string>
>("comments/fetchCommentsById", async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
        return rejectWithValue("error");
    }

    try {
        const response = await extra.api.get<CommentProps[]>("/comments", {
            params: {
                articleId,
                _expand: "user",
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
