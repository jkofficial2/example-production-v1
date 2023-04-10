import { Profile } from "features/EditableProfileCard";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";

const data: Profile = {
    username: "admin",
    age: 22,
    country: "Belarus",
    lastName: "pudge",
    firstName: "asd",
    city: "asf",
    currency: "USD",
    id: "1",
};

describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual(["SERVER_ERROR"]);
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastName: "" },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual(["INCORRECT_USER_DATA"]);
    });
});
