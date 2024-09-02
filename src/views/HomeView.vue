<script setup>
import HomeCard from "@/components/HomeCard.vue";
import HomeAdd from "@/components/HomeAdd.vue";
import bankcardicon from "@/assets/icons/bankcardicon.svg";
import piggybankicon from "@/assets/icons/piggybankicon.svg";
import cashicon from "@/assets/icons/cashicon.svg";
import HomeBalance from "@/components/HomeBalance.vue";
</script>

<template>
	<HomeBalance balance="32,645.40" />
	<div class="flex flex-wrap justify-center">
		<HomeCard
			:icon="bankcardicon"
			title="cart"
			value="25000" />
		<HomeCard
			:icon="cashicon"
			title="cash"
			value="25000" />
		<HomeCard
			:icon="piggybankicon"
			title="saving"
			value="25000" />
		<HomeAdd />
	</div>
	
</template>

<style scoped></style>
