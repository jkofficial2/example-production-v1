import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    test("with text", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("with text and class", () => {
        render(<Button theme="clear">TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
