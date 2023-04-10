import { Mods, classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Profile } from "features/EditableProfileCard";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { CurrencyType, CurrencySelect } from "shared/ui/Card/Currency";
import { CountryType, CountrySelect } from "shared/ui/Card/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: CurrencyType) => void;
    onChangeCountry?: (country: CountryType) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, [className, cls.error])}
            >
                <Text
                    variant="error"
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Пропробуйте обновить страницу")}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <div className={classNames(cls.ProfileCard, [className], mods)}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.firstName}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Город")}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Введите имя пользователя")}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Введите ссылку на аватар")}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
