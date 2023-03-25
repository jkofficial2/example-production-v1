import { Configuration } from "webpack";

export default function buildOptimization(): Configuration["optimization"] {
    return {
        moduleIds: "deterministic",
        splitChunks: {
            cacheGroups: {
                // i18n: {
                //     test: /[\\/]node_modules[\\/](i18next|react-i18next|i18next-http-backend)[\\/]/,
                //     name: "i18next",
                //     chunks: "all",
                // },
                // redux: {
                //     test: /[\\/]node_modules[\\/](react-redux|@reduxjs\/toolkit|redux|redux-thunk|immer)[\\/]/,
                //     name: "redux",
                //     chunks: "all",
                // },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    };
}
