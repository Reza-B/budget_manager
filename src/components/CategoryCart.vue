<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	icon: {
		type: String,
		default: "/icons/bankcardicon.svg",
	},
	title: {
		type: String,
		default: "title",
	},
	value: {
		type: Number,
		default: 0,
	},
});

const conditionalClass = computed(() => {
	switch (props.title) {
		case "Shoping":
			return "bg-[#E0FFE0]";
		case "Gifts":
			return "bg-[#EBE2FF]";
		case "Food":
			return "bg-[#FEE0D6]";
		case "Cafe":
			return "bg-[#E0ECFF]";
		case "Transport":
			return "bg-[#FFF7DA]";
		case "Health":
			return "bg-[#D5FFF8]";
		default:
			return "bg-[#F5F5F5]";
	}
});
</script>

<template>
	<div
		:class="[
			'w-[30%]',
			'm-1',
			'flex',
			'gap-2',
			'flex-col',
			'rounded-[25%]',
			conditionalClass,
		]">
		<div class="flex">
			<span
				class="w-[50px] h-[50px] m-3 mb-0 bg-white rounded-full flex items-center justify-center">
				<img :src="icon"
			/></span>
		</div>
		<div class="flex flex-col items-center justify-center mb-3">
			<div class="text-xl m-0">{{ title }}</div>

			<div class="text-2xl">
				<span class="text-sm font-bold text-slate-600">$</span>{{ value }}
			</div>
		</div>
	</div>
</template>
