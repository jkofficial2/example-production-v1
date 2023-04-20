import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./DropDown.module.scss";
import { Fragment, ReactNode, memo } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";
import { Menu } from "@headlessui/react";
import { Profile } from "entities/Profile";

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    user?: Profile;
}

interface DropDownProps {
    className?: string;
    onClick?: () => void;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction?: DropdownDirection;
    isOpen?: boolean;
    isTrue?: boolean;
    isSelect?: boolean;
    buttonText?: string;
}
const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": cls.optionsBottomLeft,
    "bottom right": cls.optionsBottomRight,
    "top right": cls.optionsTopRight,
    "top left": cls.optionsTopLeft,
};

export const DropDown = memo((props: DropDownProps) => {
    const { className, trigger, items, direction = "bottom right" } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, [], {
                                [cls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={item.href + index + index}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            key={`${item.href} + ${index + index}`}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
