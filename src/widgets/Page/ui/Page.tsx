import { classNames } from "shared/lib/ClassNames/ClassNames";
import {
    memo,
    MutableRefObject,
    ReactNode,
    useLayoutEffect,
    useRef,
} from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import cls from "./Page.module.scss";
import { StateSchema } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import { getSaveScrollByPath } from "../model/selectors/saveScroll";
import { UIEventScroll } from "../model/types/saveScrollSchema";
import { saveScrollActions } from "../model/slices/saveScrollSlice";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    isTriggerVisible?: boolean;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd, isTriggerVisible } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) =>
        getSaveScrollByPath(state, pathname)
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
        trigger: isTriggerVisible,
    });

    useLayoutEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    const onScroll = useThrottle((e: UIEventScroll<HTMLDivElement>) => {
        dispatch(
            saveScrollActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            })
        );
    }, 700);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, [className])}
            onScroll={onScroll}
        >
            <div className={classNames(cls.initedTrigger)}>
                {children}
                {onScrollEnd ? (
                    <div className={cls.trigger} ref={triggerRef} />
                ) : null}
            </div>
        </section>
    );
});
