import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (
    props: ArticleImageBlockComponentProps
) => {
    const { className, block } = props;

    return (
        <div
            className={classNames(cls.ArticleImageBlockComponent, [className])}
        >
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && <Text text={block.title} />}
        </div>
    );
};
