<script setup lang="ts">
import BottomNavigation from "@/components/bottomNavigation.vue";
</script>

<template>
	<div class="relative h-[100vh]">
		<div>
			<router-view />
		</div>
		<BottomNavigation />
	</div>
</template>
