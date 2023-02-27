import { screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";

describe("Navbar", () => {
    test("with only first param", () => {
        ComponentRender(<Navbar />);
        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    });
});
