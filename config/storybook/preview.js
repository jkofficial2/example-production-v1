import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/decorators/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/decorators/SuspenseDecorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator("light"));
addDecorator(SuspenseDecorator);
