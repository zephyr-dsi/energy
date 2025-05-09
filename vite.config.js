/*import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/App.jsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@/styles": "/resources/css",
            "@": "/resources/js",
        },
    },
});*/
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path"; // ✅ Ajouter path

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/App.jsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@/styles": path.resolve(__dirname, "resources/css"), // ✅ corrigé
            "@": path.resolve(__dirname, "resources/js"),         // ✅ corrigé
        },
    },
});

