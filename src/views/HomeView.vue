
<script setup>

import { ref } from "vue";

    const icon = ref("test")
    const title = ref("test")
    const value = ref("test")

</script>

<template>
    <div>
      <p>{{ title }}</p>
      <span>{{ icon }}</span>
      <p>{{ value }}</p>
    </div>
  </template>
  
  <style scoped>
  
  </style>
  