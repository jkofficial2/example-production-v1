import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";

describe("Sidebar", () => {
    test("with only first param", () => {
        ComponentRender(<Sidebar withSidebar={true} />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test toggle", () => {
        ComponentRender(<Sidebar withSidebar={true} />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collabsed");
    });
});
