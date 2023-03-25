import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/theme";
import { memo } from "react";
import LightIcon from "shared/assets/icons/light.svg";
import DarkIcon from "shared/assets/icons/dark.svg";
import { Button } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
//sleeping sun
interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="clear"
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, [className])}
        >
            {theme === "dark" ? (
                <Icon size="size_xl">
                    <DarkIcon />
                </Icon>
            ) : (
                <Icon size="size_xl">
                    <LightIcon />
                </Icon>
            )}
        </Button>
    );
});
