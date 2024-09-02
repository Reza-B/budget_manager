<script setup>
import CategoryCart from "@/components/CategoryCart.vue";
import PieChart from "@/components/PieChart.vue";
import { categoriesList } from "@/data";
const total = categoriesList
	.map((category) => category.value)
	.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

import BottomSheet from "@/components/BottomSheet.vue";
import { ref } from "vue";
const isSheetOpen = ref(false);
const isDropOpen = ref(false);
</script>

<template>
	<div class="relative">
		<PieChart :data="categoriesList" />
		<div class="absolute top-[52%] w-full">
			<p class="text-center font-bold text-4xl">{{ "$" + total + ".0" }}</p>
		</div>
	</div>

	<div class="flex flex-wrap mt-3 justify-center">
		<CategoryCart
			@click="isSheetOpen = true"
			v-for="category in categoriesList"
			:icon="category.icon"
			:title="category.name"
			:value="category.value" />
	</div>
	<div class="p-4">
		<BottomSheet
			:isOpen="isSheetOpen"
			@close="isSheetOpen = false">
			<div>
				<p class="text-slate-500 font-medium text-lg text-center">Expenses</p>

				<div class="m-8 flex items-center justify-center">
					<div class="flex text-4xl text-slate-500 items-center">$</div>
					<div class="text-black text-6xl p-2.5">0.00</div>
				</div>
				<input
					type="text"
					class="outline-none font-semibold mx-auto w-[100%] text-center"
					placeholder="Add comment..." />
				<div class="flex py-4 gap-1">
					<div class="flex flex-col gap-1 w-full">
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">1</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">4</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">7</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#FFF7D8] flex justify-center items-center">
							<p class="text-4xl">$</p>
						</div>
					</div>
					<div class="flex flex-col gap-1 w-full">
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">2</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">5</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">8</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">0</p>
						</div>
					</div>
					<div class="flex flex-col gap-1 w-full">
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">3</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">6</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">9</p>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#F5F5F5] flex justify-center items-center">
							<p class="text-4xl">,</p>
						</div>
					</div>
					<div class="flex flex-col gap-1 w-full">
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#FEE0D7] flex justify-center items-center">
							<svg
								fill="#000000"
								height="28px"
								width="28px"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<g>
									<g>
										<g>
											<path
												d="M490.667,64H133.077c-7.196,0-13.906,3.627-17.848,9.647L3.485,244.314c-4.647,7.098-4.647,16.274,0,23.372
				l111.744,170.667c3.942,6.02,10.652,9.647,17.848,9.647h357.589c11.782,0,21.333-9.551,21.333-21.333V85.333
				C512,73.551,502.449,64,490.667,64z M469.333,405.333H144.609L46.833,256l97.776-149.333h324.725V405.333z" />
											<path
												d="M198.246,356.418c8.331,8.331,21.839,8.331,30.17,0l70.248-70.248l70.248,70.248c8.331,8.331,21.839,8.331,30.17,0
				s8.331-21.839,0-30.17L328.834,256l70.248-70.248c8.331-8.331,8.331-21.839,0-30.17s-21.839-8.331-30.17,0l-70.248,70.248
				l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L268.495,256l-70.248,70.248
				C189.915,334.58,189.915,348.087,198.246,356.418z" />
										</g>
									</g>
								</g>
							</svg>
						</div>
						<div
							class="h-[24%] aspect-square rounded-3xl bg-[#E1ECFF] flex justify-center items-center">
							<svg
								width="32px"
								height="32px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round" />
							</svg>
						</div>
						<div
							class="h-[49%] aspect-square rounded-3xl bg-[#000000] flex justify-center items-center">
							<svg
								width="32px"
								height="32px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4 12.6111L8.92308 17.5L20 6.5"
									stroke="#ffffff"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</BottomSheet>
	</div>
</template>
