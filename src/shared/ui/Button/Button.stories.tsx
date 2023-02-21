import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "./Button";


interface ButtonProps {
  args: { theme?: ThemeButton; children: string };
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
    children: "Text",
    theme: "outline"
};

export const Clear: ButtonProps = Template.bind({});
Clear.args = {
    children: "Text",
    theme: "clear",
};

// export const Outline = Template.bind({});
// Outline.args = {
//     children: "Text",
//     theme: ThemeButton.OUTLINE,
// };

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: "Text",
//     theme: ThemeButton.OUTLINE,
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
