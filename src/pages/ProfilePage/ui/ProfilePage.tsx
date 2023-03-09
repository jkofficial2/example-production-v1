import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ProfilePage.module.scss";
import { memo, useCallback, useEffect } from "react";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    fetchProfileData,
    getProfileForm,
    getProfileIsError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from "features/EditableProfileCard";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { ValidateProfileError } from "features/EditableProfileCard/model/types/profile";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { CurrencyType } from "entities/Currency";
import { CountryType } from "entities/Country";

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation("profile");
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileIsError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const dispatch = useAppDispatch();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(
            "Серверная ошибка при сохранении"
        ),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            "Имя и фамилия обязательны"
        ),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    };

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstName: value || "" }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastName: value || "" }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    age: Number(value?.replace(/\D/gi, "") || 0),
                })
            );
        },
        [dispatch]
    );
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: CurrencyType) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: CountryType) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme="error"
                            text={validateErrorTranslates[err]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
