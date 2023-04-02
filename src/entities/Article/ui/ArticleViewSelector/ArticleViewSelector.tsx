import { classNames } from "shared/lib/ClassNames/ClassNames";
import { FunctionComponent, SVGAttributes, memo } from "react";
import ListIcon from "shared/assets/icons/list-square.svg";
import TiledIcon from "shared/assets/icons/tiles-sixteen.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { Button } from "shared/ui/Button/Button";
import cls from "./ArticleViewSelector.module.scss";
import { ArticleView } from "../../model/types/article";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}
interface ViewTypesProps {
    view: ArticleView;
    icon: FunctionComponent<SVGAttributes<SVGAElement>>;
}

const viewTypes: ViewTypesProps[] = [
    {
        view: "TILE",
        icon: TiledIcon,
    },
    {
        view: "LIST",
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    variant="backgroundInverted"
                    onClick={onClick(viewType.view)}
                    key={viewType.view + index}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames("", [], {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
