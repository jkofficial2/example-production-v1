import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EditableProfileCardHeader } from "./EditableProfileCardHeader";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "features/editableProfileCard/EditableProfileCardHeader",
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
