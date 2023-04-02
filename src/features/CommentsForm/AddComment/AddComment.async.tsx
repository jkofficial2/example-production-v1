import { FC, lazy } from "react";
import { AddCommentProps } from "./AddComment";

export const AddCommentAsync = lazy<FC<AddCommentProps>>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import("./AddComment")), 500);
        })
);
