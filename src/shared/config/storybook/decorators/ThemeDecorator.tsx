// import "app/styles/index.scss";
import { Story } from "@storybook/react";
import { Theme } from "app/provider/theme/lib/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
};
