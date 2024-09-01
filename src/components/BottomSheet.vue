<template>
	<transition name="bottom-sheet">
		<div
			v-if="isOpen"
			class="fixed inset-0 z-[99] flex items-end justify-center bg-gray-900 bg-opacity-60 pb-1"
			@click="close">
			<div
				class="bg-white w-[420px] rounded-3xl shadow-lg p-4"
				@click.stop
				@touchstart="startTouch"
				@touchmove="moveTouch"
				@touchend="endTouch"
				:style="{ transform: `translateY(${translateY}px)` }">
				<div class="mx-auto w-16 h-2 bg-slate-400 rounded-md mb-2"></div>
				<div class="mt-4">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(["close"]);

const translateY = ref(0);
const startY = ref(0);

const close = () => {
	emit("close");
};

const startTouch = (e) => {
	startY.value = e.touches[0].clientY;
	console.log("Touch start:", startY.value);
};

const moveTouch = (e) => {
	const touchY = e.touches[0].clientY;
	translateY.value = touchY - startY.value;
	console.log("Touch move:", translateY.value);

	if (translateY.value < 0) {
		translateY.value = 0;
	}
};

const endTouch = () => {
	console.log("Touch end. translateY:", translateY.value);
	if (translateY.value > 100) {
		close();
	}
	translateY.value = 0;
};
</script>

<style scoped>
.bottom-sheet-enter-active,
.bottom-sheet-leave-active {
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.bottom-sheet-enter,
.bottom-sheet-leave-to {
	transform: translateY(100%);
	opacity: 0;
}
</style>
