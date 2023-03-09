import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Profile } from "../../types/profile";

describe("getProfileForm.test", () => {
    test("should return error", () => {
        const data: Profile = {
            username: "admin",
            age: 22,
            country: "Russia",
            lastName: "pudge",
            firstName: "asd",
            city: "asf",
            currency: "RUB",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
