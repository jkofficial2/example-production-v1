import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { $api } from "shared/api/api";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "entities/Profile";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";

const profile: Profile = {
    id: "1",
    username: "admin",
    age: 22,
    country: "Armenia",
    lastName: "admin",
    firstName: "admin",
    city: "asf",
    currency: "USD",
};
const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: "1", username: "admin" },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe("features/EditableProfileCard", () => {
    test("Режим рид онли должен переключиться", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );
        expect(
            screen.getByTestId("EditableProfileCardHeader.CancelButton")
        ).toBeInTheDocument();
    });

    test("При отмене значения должны обнуляться", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.firstName"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastName"));

        await userEvent.type(
            screen.getByTestId("ProfileCard.firstName"),
            "user"
        );
        await userEvent.type(
            screen.getByTestId("ProfileCard.lastName"),
            "user"
        );

        expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("user");
        expect(screen.getByTestId("ProfileCard.lastName")).toHaveValue("user");

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.CancelButton")
        );

        expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue(
            "admin"
        );
        expect(screen.getByTestId("ProfileCard.lastName")).toHaveValue("admin");
    });

    test("Должна появиться ошибка", async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.firstName"));

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton")
        );

        expect(
            screen.getByTestId("EditableProfileCard.Error.Paragraph")
        ).toBeInTheDocument();
    });

    test("Если нет ошибок валидации, то на сервер должен уйти PUT запрос", async () => {
        const mockPutReq = jest.spyOn($api, "put");
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );

        await userEvent.type(
            screen.getByTestId("ProfileCard.firstName"),
            "user"
        );

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton")
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
