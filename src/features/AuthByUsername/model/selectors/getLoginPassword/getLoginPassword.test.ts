import { getLoginPassword } from "./getLoginPassword";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginPassword.test", () => {
    test("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "Tigran_Lord",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("Tigran_Lord");
    });

    test("should return empty", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
