import { createRouter, createWebHistory } from "vue-router";
import SplashView from "@/views/SplashView.vue";
import HomeView from "@/views/HomeView.vue";
import AnalysisView from "@/views/AnalysisView.vue";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "splash",
			component: SplashView,
		},
		{
			path : "/home",
			name : "home",
			component : HomeView,
		},
		{
			path : "/analysis",
			name : "analysis",
			component : AnalysisView,
		}
	],
});

export default router;
