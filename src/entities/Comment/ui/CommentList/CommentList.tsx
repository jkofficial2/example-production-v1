import { classNames } from "shared/lib/ClassNames/ClassNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();

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
                <Text text={t("Комментарии отсутствуют")} />
            )}
        </div>
    );
});
