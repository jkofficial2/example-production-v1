import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import buildResolve from "./buildResolve";
import buildDevServer from "./buildDevServer";
import buildOptimization from "./buildOptimization";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
            publicPath: "/",
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(options),
        plugins: buildPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,

        devServer: isDev ? buildDevServer(options) : undefined,
        optimization: buildOptimization(),
        cache: true,
    };
}
