import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./[FTName].module.scss";

interface [FTName]Props {
    className?: string;
}

export const [FTName] = (props: [FTName]Props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.[FTName], [className])}>
            
        </div>
    );
};