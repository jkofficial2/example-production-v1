import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ThemeSwitcher.module.css";
import { useTheme } from "app/provider/theme";
import LightIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/sleeping.svg";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={"clear"}
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
};
