import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/theme";
import { memo } from "react";
import LightIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/sleeping.svg";
import { Button } from "shared/ui/Button/Button";
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
                <DarkIcon width={30} height={30} />
            ) : (
                <LightIcon width={30} height={30} />
            )}
        </Button>
    );
});
