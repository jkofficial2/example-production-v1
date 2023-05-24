import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Drawer.module.scss";
import { memo } from "react";

interface DrawerProps {
    className?: string;
}

export const Drawer = memo((props: DrawerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return <div className={classNames(cls.Drawer, [className])}></div>;
});
