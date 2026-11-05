import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        ignores: [".config/", "dist/"],
    },
    {
        rules: {
            semi: "error",
            "prefer-const": "error",
        },
    },
]);
