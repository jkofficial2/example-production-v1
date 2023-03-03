import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, [className])}>
                {t("Profile Page")}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
