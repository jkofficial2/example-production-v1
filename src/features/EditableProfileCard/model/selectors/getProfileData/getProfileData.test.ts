import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Profile } from "entities/Profile/model/types/profile";

describe("getProfileData.test", () => {
    test("should return error", () => {
        const data: Profile = {
            username: "admin",
            age: 22,
            country: "Armenia",
            lastName: "pudge",
            firstName: "asd",
            city: "asf",
            currency: "USD",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
