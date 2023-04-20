import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Text } from "shared/ui/Text/Text";
import { ProfileCard } from "entities/Profile";
import { VStack } from "shared/ui/Stack";
import { ValidateProfileErrorUnion } from "../../model/consts/consts";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import {
    ReducersList,
    DynamicModuleLoader,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { CountryType } from "shared/ui/Card/Country";
import { CurrencyType } from "shared/ui/Card/Currency";

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation("profile");

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates: OptionalRecord<ValidateProfileErrorUnion, string> = {
        SERVER_ERROR: t("Серверная ошибка при сохранении"),
        INCORRECT_COUNTRY: t("Некорректный регион"),
        NO_DATA: t("Данные не указаны"),
        INCORRECT_USER_DATA: t("Имя и фамилия обязательны"),
        INCORRECT_AGE: t("Некорректный возраст"),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

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
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max className={classNames("", [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length &&
                    validateErrors.map((err: ValidateProfileErrorUnion) => (
                        <Text
                            key={err}
                            variant="error"
                            text={validateErrorTranslates[err]}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
