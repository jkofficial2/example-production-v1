import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, VariantButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

import "app/styles/index.scss";

interface ButtonProps {
    args: { variant: VariantButton; children: string };
}

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline: ButtonProps = Template.bind({});
Outline.args = {
    children: "Tdsext",
    variant: "outline",
};

export const Clear: ButtonProps = Template.bind({});
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
