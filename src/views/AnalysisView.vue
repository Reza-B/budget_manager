<script setup>
import AnalysisTimes from "@/components/AnalysisTimes.vue";
import AnalysisCategories from "@/components/AnalysisCategories.vue";
import shopicon from "@/assets/icons/shopicon.svg";
import gifticon from "@/assets/icons/gifticon.svg";
import foodicon from "@/assets/icons/foodicon.svg";
const paymentMetod = ["cash", "cart"];
</script>

<template>
	<div class="flex flex-wrap justify-center">
		<AnalysisTimes
			title="Day"
			value="40" />
		<AnalysisTimes
			title="Week"
			value="500" />
		<AnalysisTimes
			title="Month"
			value="1,612" />
	</div>
	<div class="flex-col">
		<AnalysisCategories
			title="Shoping"
			:icon="shopicon"
			:paymentMetod="paymentMetod"
			amount="100"
			percentage="20" />
		<AnalysisCategories
			title="Gifts"
			:icon="gifticon"
			:paymentMetod="paymentMetod"
			amount="100"
			percentage="20" />
		<AnalysisCategories
			title="Food"
			:icon="foodicon"
			:paymentMetod="paymentMetod"
			amount="100"
			percentage="20" />
	</div>
</template>
