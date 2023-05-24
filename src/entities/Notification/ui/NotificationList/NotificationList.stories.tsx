import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotificationList } from "./NotificationList";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "entities/Notification/NotificationList",
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
