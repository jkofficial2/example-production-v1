import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import Main from "./Main";

export default {
    title: "pages/Main",
    component: Main,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator("dark")];
