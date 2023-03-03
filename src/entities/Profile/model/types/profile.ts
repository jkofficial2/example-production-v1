import { Country, Currency } from "shared/const/commons";

export interface Profile {
    firstName: string;
    secondName: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    userName: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
