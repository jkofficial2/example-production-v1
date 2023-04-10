/* eslint-disable no-undef */
declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare module "*.svg" {
    const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default svg;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: "storybook" | "frontend" | "jest";

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

type TupleToObject<T> = {
    [key in keyof T]: T[key];
};

declare interface PageConfig {
	withFooter?: boolean
	withSidebar?: boolean
}