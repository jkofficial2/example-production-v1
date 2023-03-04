import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "pages/Main",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => (
    <ProfilePage />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ StoreDecorator({})];


export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator("dark"), StoreDecorator({})];
