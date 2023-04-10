import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleTextBlockComponent.module.scss";
import { Text } from "shared/ui/Text/Text";
import { ArticleTextBlock } from "entities/Article/model/types/article";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (
    props: ArticleTextBlockComponentProps
) => {
    const { className, block } = props;

    return (
        <article className={classNames(cls.ArticleTextBlockComponent, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </article>
    );
};
