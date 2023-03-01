import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "widget/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator("dark")
];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];
