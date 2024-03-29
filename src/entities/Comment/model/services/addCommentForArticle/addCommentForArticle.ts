import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentProps } from "../../../";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { fetchCommentsById } from "../fetchCommentsById/fetchCommentsById";

export const addCommentForArticle = createAsyncThunk<
CommentProps,
    string,
    ThunkConfig<string>
>("comment/addCommentForArticle", async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue("no data");
    }

    try {
        const response = await extra.api.post<CommentProps>("/comments", {
            articleId: article.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsById(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
