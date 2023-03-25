import { Story } from "@storybook/react";
import { ThemeProvider } from "app/providers/theme";
import { Theme } from "app/providers/theme/lib/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
