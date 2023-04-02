import { SyntheticEvent, AbstractView } from "react";

// <Адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;

export interface saveScrollSchema {
    scroll: ScrollSchema;
}

export interface UIEventScroll<T> extends SyntheticEvent<T> {
    detail: number;
    view: AbstractView;
}
