import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("render", () => {
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("render", () => {
        render(<Sidebar />);
        const toggle = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(screen.getByTestId("sidebar-toggle")).toHaveClass("collabsed");
    });
});
