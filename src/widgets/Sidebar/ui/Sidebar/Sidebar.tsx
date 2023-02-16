import { Button } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Sidebar.module.css";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
            <Button data-testid="sidebar-toggle" theme="clear" onClick={onToggle}>
                toggle
            </Button>
        </div>
    );
};
