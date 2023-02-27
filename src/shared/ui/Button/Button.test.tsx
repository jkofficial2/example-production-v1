import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";
import { Button } from "./Button";
import { screen } from "@testing-library/react";

describe("Button", () => {
    test("with text", () => {
        ComponentRender(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("with text and class", () => {
        ComponentRender(<Button variant="clear">TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
