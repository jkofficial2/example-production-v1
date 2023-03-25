import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProfileCard } from "entities/Profile";
import avatar from "shared/assets/img/j.jpeg";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: "admin",
        age: 22,
        country: "Armenia",
        lastName: "pudge",
        firstName: "asd",
        city: "asf",
        currency: "USD",
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: "true",
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
