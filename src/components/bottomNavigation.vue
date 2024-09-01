<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const pageIndex = ref(0);
const router = useRouter();
const pages = ["home", "category", "analysis", "profile"];

const btnClick = (id) => {
	pageIndex.value = id;
	router.replace(`/app/${pages[id]}`);
};
</script>
<template>
	<div class="bottom-0 absolute z-10 flex justify-around w-full p-8">
		<button @click="btnClick(0)">
			<svg
				v-if="pageIndex !== 0"
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z"
					stroke="#222222" />
				<path
					d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
					stroke="#222222"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
			<svg
				v-else
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M5.27446 10.1262C5 10.7229 5 11.4018 5 12.7595V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.11733 20.9457 6.94285 20.9949 8.5 20.9995V16C8.5 14.8954 9.39543 14 10.5 14H13.5C14.6046 14 15.5 14.8954 15.5 16V20.9995C17.0572 20.9949 17.8827 20.9457 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999V12.7595C19 11.4018 19 10.7229 18.7255 10.1262C18.4511 9.52943 17.9356 9.08763 16.9047 8.20401L15.9047 7.34687C14.0414 5.74974 13.1098 4.95117 12 4.95117C10.8902 4.95117 9.95857 5.74974 8.09525 7.34687L7.09525 8.20401C6.06437 9.08763 5.54892 9.52943 5.27446 10.1262ZM13.5 20.9999V16H10.5V20.9999H13.5Z"
					fill="#222222" />
			</svg>
		</button>
		<button @click="btnClick(1)">
			<svg
				v-if="pageIndex !== 1"
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<rect
					x="3"
					y="3"
					width="7"
					height="7"
					rx="1"
					stroke="#222222"
					stroke-linecap="round" />
				<rect
					x="3"
					y="14"
					width="7"
					height="7"
					rx="1"
					stroke="#222222"
					stroke-linecap="round" />
				<rect
					x="14"
					y="3"
					width="7"
					height="7"
					rx="1"
					stroke="#222222"
					stroke-linecap="round" />
				<rect
					x="14"
					y="14"
					width="7"
					height="7"
					rx="1"
					stroke="#222222"
					stroke-linecap="round" />
			</svg>
			<svg
				v-else
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z"
					fill="#222222" />
				<path
					d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z"
					fill="#222222" />
				<path
					d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z"
					fill="#222222" />
				<path
					d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z"
					fill="#222222" />
			</svg>
		</button>
		<button @click="btnClick(2)">
			<svg
				v-if="pageIndex !== 2"
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8 10L8 16"
					stroke="#222222"
					stroke-linecap="round"
					stroke-linejoin="round" />
				<path
					d="M12 12V16"
					stroke="#222222"
					stroke-linecap="round"
					stroke-linejoin="round" />
				<path
					d="M16 8V16"
					stroke="#222222"
					stroke-linecap="round"
					stroke-linejoin="round" />
				<rect
					x="3"
					y="4"
					width="18"
					height="16"
					rx="2"
					stroke="#222222" />
			</svg>
			<svg
				v-else
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM16 8C16.5523 8 17 8.44772 17 9V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V9C15 8.44772 15.4477 8 16 8ZM9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11V17C7 17.5523 7.44772 18 8 18C8.55229 18 9 17.5523 9 17V11ZM13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13Z"
					fill="#222222" />
			</svg>
		</button>
		<button @click="btnClick(3)">
			<svg
				v-if="pageIndex !== 3"
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<circle
					cx="12"
					cy="8"
					r="3.5"
					stroke="#222222"
					stroke-linecap="round" />
				<path
					d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z"
					stroke="#222222"
					stroke-linecap="round" />
			</svg>
			<svg
				v-else
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<circle
					cx="12"
					cy="8"
					r="4"
					fill="#222222" />
				<path
					d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z"
					fill="#222222" />
			</svg>
		</button>
	</div>
</template>
