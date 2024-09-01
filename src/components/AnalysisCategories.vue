
<script setup>
import { defineProps ,computed} from "vue";


const props = defineProps({
    icon :{
        default : '@/assets/icons/bankcardicon.svg'
     }
     ,
     title :{
        type : String,
        default : "title"
     },
     paymentMetod :{
        type : Array,
        default : () =>["none"]
     },
     amount :{
        type : String,
        default : "0"
     },
     percentage: {
        type : String,
        default : "0"
     }
})


const conditionalClass = computed(() => {
  switch (props.title) {
    case 'Shoping':
      return 'bg-[#E0FFE0]';
    case 'Gifts':
      return "bg-[#EBE2FF]";
    case 'Food':
      return "bg-[#FEE0D6]";
    default:
      return "bg-[#B2CDFA]";
  }
});

</script>
<template>
<div class="flex justify-between m-5">
    <div class="flex justify-center">
    <span :class="['w-[50px]' ,'h-[50px]' ,'my-3' ,'mr-3', 'rounded-full' ,'flex ','items-center', 'justify-center' ,conditionalClass]"> <img :src="icon"></span>
<div class="flex flex-col  justify-center ">
    <p class=" flex text-2xl text-black">{{ title }}</p>
    <div>
    <span v-for="(item, index) in paymentMetod" :key="index">
        {{ item }}<span v-if="index < paymentMetod.length - 1"> - </span>
    </span>
</div>
</div>
</div>
<div class="flex flex-col  justify-center text-right">
    <p class="text-2xl font-bold mt-2"><span class="text-sm font-bold text-slate-400">$</span>{{ amount }}</p>
    <p class="text-sm font-bold text-slate-400">{{ percentage }}%</p>

</div>
</div> 

</template>