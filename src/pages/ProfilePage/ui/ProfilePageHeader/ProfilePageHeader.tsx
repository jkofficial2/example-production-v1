import { classNames } from "shared/lib/ClassNames/ClassNames";
import { Text } from "shared/ui/Text/Text";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./ProfilePageHeader.module.scss";
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
} from "features/EditableProfileCard";
import { updateProfileData } from "features/EditableProfileCard/model/services/updateProfileData/updateProfileData";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation("profile");

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, [className])}>
            <Text title={t("Профиль")} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly ? (
                        <Button
                            className={cls.editBtn}
                            variant="backgroundInverted"
                            onClick={onEdit}
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={cls.editBtn}
                                variant="backgroundInverted"
                                onClick={onCancelEdit}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                className={cls.saveBtn}
                                variant="backgroundInverted"
                                onClick={onSave}
                            >
                                {t("Сохранить")}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
