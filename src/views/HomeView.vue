
<script setup>


import HomeCard from "@/components/HomeCard.vue";
import bankcardicon from "@/assets/icons/bankcardicon.svg" ;

</script>

<template>
    <div class="flex-row justify-between">
  <HomeCard :icon = "bankcardicon" title = "cart" value = "25000$"/>
  <HomeCard :icon = "bankcardicon" title = "cash" value = "25000$"/>
  <HomeCard :icon = "bankcardicon" title = "saving" value = "25000$"/>
  <HomeCard :icon = "bankcardicon" title = "dfks" value = "25000$"/>
 
</div>
  </template>
  
  <style scoped>
  
  </style>
  