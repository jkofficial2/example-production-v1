import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleCanEditPage } from "./ArticleCanEditPage";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

export default {
    title: "shared/ArticleCanEditPage",
    component: ArticleCanEditPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleCanEditPage>;

const Template: ComponentStory<typeof ArticleCanEditPage> = (args) => (
    <ArticleCanEditPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
