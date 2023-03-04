import { getLoginError } from "./getLoginError";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error",
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual("error");
    });

    test("should return empty", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
