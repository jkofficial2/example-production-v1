export type BuildMode = "production" | "development";

export interface BuildPaths {
    entry: string;
    build: string;
    src: string;
    html: string;
    buildLocales: string;
    locales: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: "storybook" | "frontend" | "jest";
}
