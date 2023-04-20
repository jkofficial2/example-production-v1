import { CountryType } from "shared/ui/Card/Country";
import { CurrencyType } from "shared/ui/Card/Currency";

export interface Profile {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: CurrencyType;
    country?: CountryType;
    city?: string;
    username?: string;
    avatar?: string;
}
