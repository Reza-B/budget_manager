<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	icon: {
		default: "@/assets/icons/bankcardicon.svg",
	},
	title: {
		type: String,
		default: "title",
	},
	value: {
		type: String,
		default: "0",
	},
});

const conditionalClass = computed(() => {
	switch (props.title) {
		case "cash":
			return "bg-[#E1ECFE]";
		case "cart":
			return "bg-[#FEE0D6]";
		case "saving":
			return "bg-[#fff2bd]";
		default:
			return "bg-[#bdffc8]";
	}
});
</script>

<template>
	<div
		:class="[
			'w-[45%]',
			'm-2',
			'flex-col',
			'rounded-[25%]',
			'grid',
			'grid-rows-2',
			'grid-flow-col',
			conditionalClass,
		]">
		<div class="flex">
			<span
				class="w-[70px] h-[70px] m-3 bg-white rounded-full flex items-center justify-center">
				<img :src="icon"
			/></span>
			<p class="flex items-center justify-center text-2xl">{{ title }}</p>
		</div>
		<div class="flex items-center justify-center">
			<p class="text-3xl">
				<span class="text-xl font-bold text-slate-600">$</span>{{ value }}
			</p>
		</div>
	</div>
</template>
