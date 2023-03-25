import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(cls.Loader, [className])}>
            <div className={classNames(cls.loaderWrapper, [className])} >
                <div className={classNames(cls.loader, [className])} >
                    <span className={classNames(cls.ball, [className])} ></span>
                </div>
                <div className={classNames(cls.label, [className])} >
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
};
