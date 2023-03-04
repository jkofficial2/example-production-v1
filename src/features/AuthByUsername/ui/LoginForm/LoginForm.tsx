import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { useSelector } from "react-redux";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginError } from "../..//model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../..//model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../..//model/selectors/getLoginPassword/getLoginPassword";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
    onSucces: () => void;
}

const LoginForm = memo(({ className, onSucces }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const initialReducers: ReducersList = {
        loginForm: loginReducer,
    };

    const onChangeUser = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSucces();
        }
    }, [dispatch, onSucces, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, [className])}>
                <Text title={t("Форма авторизации")} />
                {error && (
                    <Text
                        text={t("Вы ввели неверный логин или пароль")}
                        theme="error"
                    />
                )}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t("Введите username")}
                    onChange={onChangeUser}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t("Введите пароль")}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    variant="backgroundInverted"
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t("Войти")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
