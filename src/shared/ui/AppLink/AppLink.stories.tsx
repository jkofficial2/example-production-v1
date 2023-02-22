import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { AppLink, AppLinkVariant } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

//!Fix type for decorators
interface AppLinkProps {
    args: { variant: AppLinkVariant; children: string };
    decorators?: any;
}

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

export const Primary: AppLinkProps = Template.bind({});
Primary.args = {
    variant: "primary",
    children: "main",
};

export const Secondary: AppLinkProps = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "about",
};

export const PrimaryDark: AppLinkProps = Template.bind({});
PrimaryDark.args = {
    variant: "primary",
    children: "main",
};
PrimaryDark.decorators = [ThemeDecorator("dark")];

export const SecondaryDark: AppLinkProps = Template.bind({});
SecondaryDark.args = {
    variant: "secondary",
    children: "about",
};
SecondaryDark.decorators = [ThemeDecorator("dark")];
