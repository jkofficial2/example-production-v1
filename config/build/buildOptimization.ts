import { Configuration } from "webpack";

export default function buildOptimization(): Configuration["optimization"] {
    return {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    };
}
