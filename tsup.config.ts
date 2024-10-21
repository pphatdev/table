import { defineConfig } from "tsup"

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["./src/**/*.ts"],
    format: ["esm"],
    sourcemap: false,
    minify: true,
    target: "node16",
    outDir: "./dist",
})