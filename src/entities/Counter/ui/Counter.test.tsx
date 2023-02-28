import { screen, waitFor } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { Counter } from "./Counter";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";

describe("Counter", () => {
    test("test render", async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await waitFor(() =>
            expect(screen.getByTestId("value-title")).toHaveTextContent("10")
        );
    });

    test("increment", async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await waitFor(() =>
            userEvent.click(screen.getByTestId("increment-btn"))
        );
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });

    test("decrement", async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await waitFor(() =>
            userEvent.click(screen.getByTestId("decrement-btn"))
        );
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
