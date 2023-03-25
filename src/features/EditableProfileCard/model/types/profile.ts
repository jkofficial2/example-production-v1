import { CountryType } from "entities/Country";
import { CurrencyType } from "entities/Currency";

export type ValidateProfileErrorUnion =
    | "INCORRECT_USER_DATA"
    | "INCORRECT_AGE"
    | "INCORRECT_COUNTRY"
    | "NO_DATA"
    | "SERVER_ERROR";

//!! подумать нужно ли использовать такой метод типизирования
// type ValueOf<T> = T[keyof T];

// const ValidateProfileError = {
//     INCORRECT_USER_DATA: "INCORRECT_USER_DATA",
//     INCORRECT_AGE: "INCORRECT_AGE",
//     INCORRECT_COUNTRY: "INCORRECT_COUNTRY",
//     NO_DATA: "NO_DATA",
//     SERVER_ERROR: "SERVER_ERROR",
// } as const;

// export type ValidateProfileErrorType = ValueOf<typeof ValidateProfileError>;

export interface Profile {
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: CurrencyType;
    country?: CountryType;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileErrorUnion[];
}