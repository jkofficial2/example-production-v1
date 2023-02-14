import { classNames } from "./ClassNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });
    test("with additional class", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", ["class1", "class2"])).toBe(expected);
    });
    test("with mods", () => {
        const expected = "someClass class1 class2 hovered selected active roundend";
        expect(
            classNames("someClass", ["class1", "class2"], {
                hovered: true,
                selected: true,
                active: true,
                roundend: true,
            })
        ).toBe(expected);
    });
    test("with mods false", () => {
        const expected = "someClass class1 class2 hovered roundend";
        expect(
            classNames("someClass", ["class1", "class2"], {
                hovered: true,
                selected: false,
                active: false,
                roundend: true,
            })
        ).toBe(expected);
    });
    test("with mods undefined", () => {
        const expected = "someClass class1 class2 hovered roundend";
        expect(
            classNames("someClass", ["class1", "class2"], {
                hovered: true,
                selected: false,
                active: undefined,
                roundend: true,
            })
        ).toBe(expected);
    });
});
