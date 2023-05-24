import { memo, useCallback, useState } from "react";

import cls from "./NotificationButton.module.scss";
import { NotificationList } from "entities/Notification";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { Button } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
// import NotificationIcon from "/shared/assets/icons/notification.svg";
import { Popover } from "shared/ui/Popups";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} variant="outline">
            {/* <Icon Svg={NotificationIcon} /> */}
            уведомление
        </Button>
    );

    return (
        <div>
            {/* <BrowserView> */}
            <Popover
                className={classNames(cls.NotificationButton, [className])}
                direction="bottom left"
                trigger={trigger}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
            {/* </BrowserView>
            <MobileView> */}
            {trigger}
            {/* <Drawer isOpen={isOpen} onClose={onCloseDrawer}> */}
            <NotificationList />
            {/* </Drawer> */}
            {/* </MobileView> */}
        </div>
    );
});
