import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";
// import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import EyeIcon from "shared/assets/icons/eye.svg";

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
    Svg: EyeIcon,
};

export const Clear = Template.bind({});
Clear.args = {
    Svg: EyeIcon,
};
