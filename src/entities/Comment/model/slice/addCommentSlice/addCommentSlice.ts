import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentSchema } from "../../types/CommentsSchema";

const initialState: AddCommentSchema = {
    text: "",
};

export const addCommentSlice = createSlice({
    name: "addComment",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;

// import { AddCommentSchema } from "features/CommentsForm";
// import {
//     ProfileSchema,
//     profileActions,
//     profileReducer,
// } from "features/EditableProfileCard";
// import { addCommentReducer } from "./addCommentSlice";

// const data: AddCommentSchema = {
//     text: "noob",
//     error: undefined,
// };

// describe("addCommentSlice.test", () => {
//     test("test set text", () => {
//         const state: DeepPartial<AddCommentSchema> = {
//             text: "noob",
//             error: undefined,
//         };
//         expect(addCommentReducer).toEqual({ state });
//     });

//     test("test error", () => {
//         const state: DeepPartial<AddCommentSchema> = {
//             error: "error",
//         };

//         expect(
//             addCommentReducer(
//                 state as AddCommentSchema,
//                 addCommentReducer.pending
//             )
//         ).toEqual({
//             isLoading: true,
//             validateErrors: undefined,
//         });
//     });

//     test("test update profile service fullfiled", () => {
//         const state: DeepPartial<ProfileSchema> = {
//             isLoading: true,
//         };

//         expect(
//             profileReducer(
//                 state as ProfileSchema,
//                 updateProfileData.fulfilled(data, "")
//             )
//         ).toEqual({
//             isLoading: false,
//             validateErrors: undefined,
//             readonly: true,
//             validateError: undefined,
//             form: data,
//             data,
//         });
//     });
// });
