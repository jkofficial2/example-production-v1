import { classNames } from "shared/lib/ClassNames/ClassNames";

import { memo, useCallback } from "react";
import Select from "../../../../Select/Select";
import { CurrencyType } from "../../model/types/currency";

interface OptionsType {
    value: CurrencyType;
    content: CurrencyType;
}

interface CurrencySelectProps {
    className?: string;
    value?: CurrencyType;
    onChange?: (value: CurrencyType) => void;
    readonly?: boolean;
}

const options: OptionsType[] = [
    { value: "RUB", content: "RUB" },
    { value: "EUR", content: "EUR" },
    { value: "EUR", content: "EUR" },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as CurrencyType);
            },
            [onChange]
        );

        return (
            <Select
                className={classNames("", [className])}
                label={("Укажите валюту")}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);
