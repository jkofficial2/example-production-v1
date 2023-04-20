import { Profile } from "entities/Profile/model/types/profile";
import { ValidateProfileErrorUnion } from "../consts/consts";

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileErrorUnion[];
}