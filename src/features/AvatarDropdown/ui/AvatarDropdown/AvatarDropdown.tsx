
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/ClassNames/ClassNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Dropdown } from "shared/ui/Popups";
import { isUserAdmin, isUserManager, getUserAuthData, userActions } from "entities/User";
import { getRouteAdmin, getRouteProfile } from "shared/const/router";

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            className={classNames("", [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: ("Админка"),
                            href: getRouteAdmin(),
                        },
                    ]
                    : []),
                {
                    content: ("Профиль"),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: ("Выйти"),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
