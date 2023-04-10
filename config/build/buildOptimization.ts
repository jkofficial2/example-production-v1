import { Configuration } from "webpack";
export default function buildOptimization(): Configuration["optimization"] {
    return {
        moduleIds: "deterministic",
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
        runtimeChunk: { name: "runtime" },
    };
}
