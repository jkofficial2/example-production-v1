import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;
    const cssLoader = buildCssLoader(isDev);

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const svgLoadger = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    return [
        fileLoader,
        svgLoadger,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
