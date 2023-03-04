import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileIsError } from "entities/Profile/model/selectors/getProfileIsError/getProfileIsError";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileIsError);

    return (
        <div className={classNames(cls.ProfileCard, [className])}>
            <div className={classNames(cls.headerProfile)}>
                <Text title={t("Profile")} />
                <Button className={classNames(cls.editBtn)} variant="clear">
                    {t("Edit")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstName}
                    className={cls.input}
                    placeholder={t("vashe-imya")}
                />
                <Input
                    value={data?.lastName}
                    className={cls.input}
                    placeholder={t("vashe-familiya")}
                />
            </div>
        </div>
    );
};
