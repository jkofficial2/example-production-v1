import { useCallback, useEffect, useRef } from "react";

export function useThrottle<T>(
    callback: (...args: T[]) => void,
    delay: number
) {
    const throttleRef = useRef(false);
    const timer: { current: NodeJS.Timeout | null } =
        useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        timer.current = setTimeout(() => {
            throttleRef.current = false;
        }, delay);
        return () => {
            clearTimeout(timer.current as NodeJS.Timeout);
        };
    }, [delay]);

    return useCallback(
        (...args: any) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay]
    );
}
