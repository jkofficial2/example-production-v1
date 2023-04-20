import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveScrollSchema } from "../types/saveScrollSchema";

const initialState: saveScrollSchema = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: "saveScroll",
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            {
                payload,
            }: PayloadAction<{
                path: string;
                position: number;
            }>
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: saveScrollActions } = saveScrollSlice;
export const { reducer: saveScrollReducer } = saveScrollSlice;
