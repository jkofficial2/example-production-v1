import { StateSchema } from "app/providers/StoreProvider";

export const getProfileIsError = (state: StateSchema) => state.profile?.error;
