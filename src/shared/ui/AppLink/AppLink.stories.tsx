import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppLink } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    children: "main",
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "about",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    variant: "primary",
    children: "main",
};
PrimaryDark.decorators = [ThemeDecorator("dark")];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    variant: "secondary",
    children: "about",
};
SecondaryDark.decorators = [ThemeDecorator("dark")];
