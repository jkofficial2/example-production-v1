import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

export default {
    title: "shared/Icon",
    component: Icon,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Outline = Template.bind({});
Outline.args = {
    children: "Tdsext",
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
};
