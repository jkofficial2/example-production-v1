import { EntityState } from "@reduxjs/toolkit";
import { User } from "entities/User";

export interface CommentProps {
    id: string;
    user: User;
    text: string;
}

export interface CommentsSchema extends EntityState<CommentProps> {
    isLoading?: boolean;
    error?: string;
}

export interface AddCommentSchema {
    text?: string;
    error?: string;
}
