import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode, Suspense } from "react";
import { MemoryRouter } from "react-router-dom";

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function ComponentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {}
) {
    const { route = "/", initialState, asyncReducers } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <Suspense fallback="">{component}</Suspense>
            </StoreProvider>
        </MemoryRouter>
    );
}
