import { classNames, Mods } from "shared/lib/ClassNames/ClassNames";
import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: T;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: any) => void;
    readonly?: boolean;
}
const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(
        () =>
            options?.map((opt, index: number) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value + index}
                >
                    {opt.content}
                </option>
            )),
        [options]
    );

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, [className], mods)}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};

export default memo(Select);
