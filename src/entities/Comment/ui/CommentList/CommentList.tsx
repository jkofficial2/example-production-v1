import { classNames } from "shared/lib/ClassNames/ClassNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";

import cls from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";
import { CommentProps } from "../../model/types/CommentsSchema";

interface CommentListProps {
    className?: string;
    comments?: CommentProps[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                        key={comment.id}
                    />
                ))
            ) : (
                <Text text={"Комментарии отсутствуют"} />
            )}
        </div>
    );
});
