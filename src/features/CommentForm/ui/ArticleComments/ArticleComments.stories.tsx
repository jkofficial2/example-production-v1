import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleComments } from "./ArticleComments";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "shared/ArticleComments",
    component: ArticleComments,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => (
    <ArticleComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
