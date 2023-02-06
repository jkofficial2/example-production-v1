import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const cssLoader = {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) =>
                  Boolean(resPath.includes(".module.")),
                localIdentName: isDev
                  ? "[path][name]__[local]--[hash:base64:5]"
                  : "[hash:base64:8]",
              },
            },
          },
        ],
      },
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [tsLoader, cssLoader];
}
