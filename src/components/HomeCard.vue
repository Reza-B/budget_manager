
<script setup>


import { defineProps } from "vue";



defineProps({
     icon :{
        default : '@/assets/icons/bankcardicon.svg'
     },
     title :{
        type : String,
        default : "title"
     },
     value :{
        type : String,
        default : "1000$"
     }
})

</script>

<template>
    <div class="w-[150px] h-[150px] flex-col bg-slate-600 rounded-[25%] grid grid-rows-2 grid-flow-col">
        <div class="justify-between grid grid-cols-2 ">
            <span class="w-[60px] h-[60px] m-3 bg-white rounded-full flex items-center justify-center"> <img :src="icon"></span>

            <p class=" flex items-center justify-center text-2xl">{{ title }}</p>
        </div>
        <p class="flex items-center justify-center text-3xl">{{ value }}</p>
    </div>
  </template>
  
  <style scoped>
  
  </style>
  