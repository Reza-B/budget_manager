<script setup>


import { defineProps } from "vue";



defineProps({
     balance :{
        type : String,
        default : "0$"
     }
})
</script>

<template>
    <div class='flex-col flex items-center justify-center mt-[80px] mb-[40px]'>
        <p class="text-xl mt-3 text-gray-600">Total Balance</p> 
        <p class="text-5xl font-bold m-3"><span class="text-3xl font-bold text-slate-400">$</span>{{ balance }}</p>
    </div>
  </template>
  