import { classNames } from "shared/lib/ClassNames/ClassNames";

import { memo, useCallback } from "react";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./AddComment.module.scss";
import {
    ReducersList,
    DynamicModuleLoader,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

import { Text } from "shared/ui/Text/Text";
import {
    getAddCommentText,
    getAddCommentError,
} from "../../model/selectors/addCommentSelectors/addCommentSelectors";
import {
    addCommentReducer,
    addCommentActions,
} from "../../model/slice/addCommentSlice/addCommentSlice";

export interface AddCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addComment: addCommentReducer,
};

const AddComment = memo((props: AddCommentProps) => {
    const { className, onSendComment } = props;
    const comment = useSelector(getAddCommentText);
    const error = useSelector(getAddCommentError);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(comment || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, comment]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Text className={cls.commentTitle} title={"Комментарии"} />
            <div className={classNames(cls.AddComment, [className])}>
                <Input
                    className={cls.input}
                    placeholder={"Введите текст комментария"}
                    value={comment || ""}
                    onChange={onCommentTextChange}
                />
                <Button variant="backgroundInverted" onClick={onSendHandler}>
                    Отправить
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddComment;
