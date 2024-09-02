<template>
	<div class="card flex justify-center">
		<Chart
			type="doughnut"
			:data="chartData"
			:options="chartOptions"
			class="w-full md:w-[30rem]" />
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";
import { categoriesList } from "@/data";

onMounted(() => {
	chartData.value = setChartData();
	chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref(null);

const labelsArray = categoriesList.map((category) => category.name);
const valuseArray = categoriesList.map((category) => category.value);
const colorsArray = categoriesList.map((category) => category.color);

const setChartData = () => {
	return {
		labels: [...labelsArray],
		datasets: [
			{
				data: [...valuseArray],
				backgroundColor: [...colorsArray],
				hoverBackgroundColor: [...colorsArray],
			},
		],
	};
};

const setChartOptions = () => {
	const textColor = "#000";

	return {
		plugins: {
			legend: {
				labels: {
					cutout: "60%",
					color: textColor,
				},
			},
		},
	};
};
</script>
