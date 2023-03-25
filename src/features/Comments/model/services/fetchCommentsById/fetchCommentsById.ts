import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

export const fetchCommentsById = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>("comments/fetchCommentsById", async (commentId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!commentId) {
        return rejectWithValue("error");
    }

    try {
        const response = await extra.api.get<Comment[]>("/comments", {
            params: {
                commentId,
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
