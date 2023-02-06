import { BuildOptions } from "./types/config";
import { ResolveOptions } from "webpack";
export default function buildResolve(option: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [option.paths.src, "node_modules"],
    alias: {},
    mainFiles: ["index"],
  };
}
