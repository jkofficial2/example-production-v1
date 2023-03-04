import { getLoginIsLoading } from "./getLoginIsLoading";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginIsLoading.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test("should return dalse", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
