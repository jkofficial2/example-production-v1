import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
    Button,
} from "./Button";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

import "app/styles/index.scss";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
    children: "Tdsext",
    variant: "outline",
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
    variant: "clear",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Text",
    variant: "outline",
};
OutlineDark.decorators = [ThemeDecorator("dark")];

export const Background = Template.bind({});
Background.args = {
    children: "Text",
    variant: "background",
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "Text",
    variant: "backgroundInverted",
};

export const ButtonSizeS = Template.bind({});
ButtonSizeS.args = {
    children: "Text",
    variant: "background",
    size: "size_s",
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Text",
    variant: "background",
    size: "size_s",
    disbled: true,
};
