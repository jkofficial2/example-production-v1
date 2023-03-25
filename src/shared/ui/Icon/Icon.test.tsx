import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";
import { Icon } from "./Icon";
import { screen } from "@testing-library/react";

describe("Icon", () => {
    test("with text", () => {
        ComponentRender(<Icon src={""} alt={""}>TEST</Icon>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("with text and class", () => {
        ComponentRender(<Icon src={""} alt={""}>TEST</Icon>);
        expect(screen.getByText("TEST"));
    });
});
