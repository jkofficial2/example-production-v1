
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Drawer.module.scss";
import { memo } from "react";

interface DrawerProps {
    className?: string;
}

export const Drawer = memo((props: DrawerProps) => {
    const { className } = props;
    return <div className={classNames(cls.Drawer, [className])}></div>;
});
