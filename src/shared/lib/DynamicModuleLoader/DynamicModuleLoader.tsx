import { FC, PropsWithChildren, useEffect } from "react";
import { useStore } from "react-redux";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks/useAppDispatch/useAppDispatch";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<
    PropsWithChildren<DynamicModuleLoaderProps>
> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name, reducer]: ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    }
                );
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>{children}</>
    );
};
