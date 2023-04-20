import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleWarningBlockComponent.module.scss";
import { Text } from "shared/ui/Text/Text";
import { ArticleWarningBlock } from "../../model/types/article";

interface ArticleWarningBlockComponentProps {
    className?: string;
    block: ArticleWarningBlock;
}

export const ArticleWarningBlockComponent = (
    props: ArticleWarningBlockComponentProps
) => {
    const { className, block } = props;

    return (
        <div
            className={classNames(cls.ArticleWarningBlockComponent, [
                className,
            ])}
        >
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph, index) => (
                <Text
                    key={paragraph + index}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
};
