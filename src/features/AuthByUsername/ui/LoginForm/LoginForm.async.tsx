import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import("./LoginForm")), 1000);
        })
);

export default LoginFormAsync;
