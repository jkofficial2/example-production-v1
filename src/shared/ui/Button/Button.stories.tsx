import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
    Button,
    ButtonBorder,
    ButtonFont,
    ButtonPadding,
    ButtonRaduis,
    ButtonSize,
    ButtonVariant,
} from "./Button";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

import "app/styles/index.scss";

interface ButtonProps {
    args: {
        variant?: ButtonVariant;
        children: string;
        radius?: ButtonRaduis;
        size?: ButtonSize;
        border?: ButtonBorder;
        padding?: ButtonPadding;
        fontSize?: ButtonFont;
    };
}

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline: ButtonProps = Template.bind({});
Outline.args = {
    children: "Tdsext",
    variant: "outline",
};

export const Clear: ButtonProps = Template.bind({});
Clear.args = {
    children: "Text",
    variant: "clear",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Text",
    variant: "outline",
};
OutlineDark.decorators = [ThemeDecorator("dark")];

export const Background: ButtonProps = Template.bind({});
Background.args = {
    children: "Text",
    variant: "background",
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "Text",
    variant: "backgroundInverted",
};

export const ButtonSizeS: ButtonProps = Template.bind({});
ButtonSizeS.args = {
    children: "Text",
    variant: "background",
    size: "size_s",
};
