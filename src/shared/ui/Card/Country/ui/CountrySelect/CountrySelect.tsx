import { classNames } from "shared/lib/ClassNames/ClassNames";

import { memo, useCallback } from "react";
import { CountryType } from "../../model/types/country";
import Select from "../../../../Select/Select";

interface OptionsType {
    value: CountryType;
    content: CountryType;
}

interface CountrySelectProps {
    className?: string;
    value?: CountryType;
    onChange?: (value: CountryType) => void;
    readonly?: boolean;
}

const options: OptionsType[] = [
    { value: "Armenia", content: "Armenia" },
    { value: "Russia", content: "Russia" },
    { value: "Belarus", content: "Belarus" },
    { value: "Ukraine", content: "Ukraine" },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
    
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as CountryType);
            },
            [onChange]
        );

        return (
            <Select
                className={classNames("", [className], {})}
                label={("Укажите страну")}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);
