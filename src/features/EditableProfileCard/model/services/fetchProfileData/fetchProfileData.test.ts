import { Profile } from "features/EditableProfileCard";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

const data: Profile = {
    username: "admin",
    age: 27,
    country: "Armenia",
    lastName: "pudge",
    firstName: "asd",
    city: "asf",
    currency: "EUR",
};

describe("fetchProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error login", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
