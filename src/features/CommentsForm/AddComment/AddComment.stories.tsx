import { ComponentStory, ComponentMeta } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import AddComment from "./AddComment";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "features/AddComment",
    component: AddComment,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = (args) => (
    <AddComment {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action("onSendComment"),
};
Normal.decorators = [StoreDecorator({})];
