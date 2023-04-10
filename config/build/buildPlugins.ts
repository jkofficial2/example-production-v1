import { BuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {
    DefinePlugin,
    HotModuleReplacementPlugin,
    ProgressPlugin,
    WebpackPluginInstance,
} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
    project,
}: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
        new CompressionPlugin({
            algorithm: "gzip",
        }),
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        //     generateStatsFile: false,
        // }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new HotModuleReplacementPlugin());
    }

    return plugins;
}
