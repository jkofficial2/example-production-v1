import { useState, useCallback } from "react";

type trigger = () => void;

const useToggle = (initialState = false): [boolean, trigger] => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback((): void => setState((state) => !state), []);

    return [state, toggle];
};

export default useToggle;
