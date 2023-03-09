import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfilePage from "pages/ProfilePage/ui/ProfilePage";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: "admin",
                age: 22,
                country: "Armenia",
                lastName: "pudge",
                firstName: "asd",
                city: "asf",
                currency: "RUB",
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator("dark"),
    StoreDecorator({
        profile: {
            form: {
                username: "admin",
                age: 22,
                country: "Belarus",
                lastName: "pudge",
                firstName: "asd",
                city: "asf",
                currency: "EUR",
            },
        },
    }),
];
