import { ProfileSchema } from "./../types/profile";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: null,
    error: null,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
