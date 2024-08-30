import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: SplashView,
		},
		{
			path: "/about",
			name: "about",
		},
	],
});

export default router;
