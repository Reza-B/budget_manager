
<script setup>


import { defineProps} from "vue";

defineProps({
     value :{
        type : String,
        default : "0$"
     },
     title :{
        type : String,
        default : "title"
     },
})

</script>

<template>
    <div class="w-[29%] h-[100px] m-2 flex-col bg-[#F5F5F5] rounded-[25%] flex items-center justify-center">
        <p class="text-xl text-gray-500">{{ title }}</p> 
        <p class="text-2xl font-bold mt-2"><span class="text-sm font-bold text-slate-400">$</span>{{ value }}</p>
    </div>
  </template>
  