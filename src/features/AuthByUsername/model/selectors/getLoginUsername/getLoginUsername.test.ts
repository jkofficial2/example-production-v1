import { getLoginUsername } from "./getLoginUsername";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginUsername.test", () => {
    test("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "Pudge",
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("Pudge");
    });

    test("should return empty", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
