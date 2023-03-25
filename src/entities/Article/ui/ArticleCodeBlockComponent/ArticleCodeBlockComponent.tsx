import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { Code } from "shared/ui/Code/Code";
import { ArticleCodeBlock } from "entities/Article/model/types/article";

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (
    props: ArticleCodeBlockComponentProps
) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, [className])}>
            <Code text={block.code} />
        </div>
    );
};
