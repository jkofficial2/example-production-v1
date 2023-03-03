import { Button } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Sidebar.module.scss";
import { memo, useState } from "react";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collabsed, setCollabsed] = useState(false);

    const onToggle = () => {
        setCollabsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, [className], {
                [cls.collabsed]: collabsed,
            })}
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                variant="backgroundInverted"
                onClick={onToggle}
            >
                toggle
            </Button>
        </div>
    );
});
