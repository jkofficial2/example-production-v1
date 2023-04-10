import { EntityState } from "@reduxjs/toolkit";
import { User } from "entities/User";

export interface Comment {
    id: string;
    user: User;
    text: string;
}

export interface CommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
