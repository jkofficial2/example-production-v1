import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";

interface TextProps {
    args: {
        theme?: TextTheme;
        text?: string;
        title?: string;
    };
    decorators: any;
}

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary: TextProps = Template.bind({});
Primary.args = {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
};

export const Error: TextProps = Template.bind({});
Error.args = {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    theme: "error",
};

export const onlyTitle: TextProps = Template.bind({});
onlyTitle.args = {
    title: "Title lorem ipsun",
};

export const onlyText: TextProps = Template.bind({});
onlyText.args = {
    text: "Description Description Description Description",
};

export const PrimaryDark: TextProps = Template.bind({});
PrimaryDark.args = {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
};
PrimaryDark.decorators = [ThemeDecorator("dark")];

export const onlyTitleDark: TextProps = Template.bind({});
onlyTitleDark.args = {
    title: "Title lorem ipsun",
};
onlyTitleDark.decorators = [ThemeDecorator("dark")];

export const onlyTextDark: TextProps = Template.bind({});
onlyTextDark.args = {
    text: "Description Description Description Description",
};
onlyTextDark.decorators = [ThemeDecorator("dark")];
