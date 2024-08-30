import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		vue(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.png", "favicon.ico"],
			manifest: {
				name: "Budget Manager",
				short_name: "Budget",
				description: "My awesome Budget Manager app!",
				theme_color: "#ffffff",
				icons: [
					{
						src: "128.png",
						sizes: "128x128",
						type: "image/png",
					},
					{
						src: "192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
