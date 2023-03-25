import { Profile } from "features/EditableProfileCard";
import { validateProfileData } from "./validateProfileData";

const data: Profile = {
    username: "admin",
    age: 22,
    country: "Armenia",
    lastName: "pudge",
    firstName: "asd",
    city: "asf",
    currency: "USD",
};

describe("validateProfileData.test", () => {
    test("success", async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test("without first and last name", async () => {
        const result = validateProfileData({
            ...data,
            firstName: "",
            lastName: "",
        });

        expect(result).toEqual(["INCORRECT_USER_DATA"]);
    });

    test("incorrect age", async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual(["INCORRECT_AGE"]);
    });

    test("incorrect country", async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual(["INCORRECT_COUNTRY"]);
    });

    test("incorrect all", async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            "INCORRECT_USER_DATA",
            "INCORRECT_AGE",
            "INCORRECT_COUNTRY",
        ]);
    });
});
