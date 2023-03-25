import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./ArticlesPage.module.scss";
import { memo } from "react";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(cls.ArticlesPage, [className])}>
            ArticlesPage
        </div>
    );
};
export default memo(ArticlesPage);
