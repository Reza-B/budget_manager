
<script setup>


import HomeCard from "@/components/HomeCard.vue";
import HomeAdd from "@/components/HomeAdd.vue";
import bankcardicon from "@/assets/icons/bankcardicon.svg" ;

</script>

<template>
    <div class="flex flex-wrap justify-center ">
  <HomeCard :icon = "bankcardicon" title = "cart" value = "25000$"/>
  <HomeCard :icon = "bankcardicon" title = "cash" value = "25000$"/>
  <HomeCard :icon = "bankcardicon" title = "saving" value = "25000$"/>
  <HomeAdd />
 
</div>
  </template>
  
  <style scoped>
  
  </style>
  