import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentError, getAddCommentText } from "./addCommentSelectors";
import { AddCommentSchema } from "../types/addComment";

describe("addCommentSelectors.test", () => {
    test("should return data", () => {
        const data: AddCommentSchema = {
            text: "ez ez hook",
        };
        const state: DeepPartial<StateSchema> = {
            addComment: {
                text: "ez ez hook",
            },
        };
        expect(getAddCommentText(state as StateSchema)).toEqual(data.text);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentText(state as StateSchema)).toEqual("");
    });
    test("error", () => {
        const data: AddCommentSchema = {
            error: "error",
        };
        const state: DeepPartial<StateSchema> = {
            addComment: {
                error: "error",
            },
        };
        expect(getAddCommentError(state as StateSchema)).toEqual(data.error);
    });
});
