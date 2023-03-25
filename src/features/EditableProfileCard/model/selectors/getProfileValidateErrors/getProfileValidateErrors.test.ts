import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileValidateErrors.test", () => {
    test("should work with filled state", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: ["SERVER_ERROR", "INCORRECT_AGE"],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            "SERVER_ERROR",
            "INCORRECT_AGE",
        ]);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined
        );
    });
});
