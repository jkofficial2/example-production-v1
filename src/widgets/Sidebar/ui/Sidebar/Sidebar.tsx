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
    >
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};
