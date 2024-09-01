<script setup>
import AnalysisTimes from "@/components/AnalysisTimes.vue";
import AnalysisCategories from "@/components/AnalysisCategories.vue";
import bankcardicon from "@/assets/icons/bankcardicon.svg"
const paymentMetod = ["cash","cart"]
</script>

<template>
    <div class="flex flex-wrap justify-center ">
    <AnalysisTimes title = "Day" value = "40"/>
    <AnalysisTimes title = "Week" value = "500"/>
    <AnalysisTimes title = "Month" value = "1,612"/>
</div>
<div class="flex-col">
<AnalysisCategories title="Shoping" :icon="bankcardicon" :paymentMetod="paymentMetod" amount="100" percentage="20"/> 
<AnalysisCategories title="Gifts" :icon="bankcardicon" :paymentMetod="paymentMetod" amount="100" percentage="20"/> 
<AnalysisCategories title="Food" :icon="bankcardicon" :paymentMetod="paymentMetod" amount="100" percentage="20"/> 
<AnalysisCategories></AnalysisCategories>
</div>
</template>

