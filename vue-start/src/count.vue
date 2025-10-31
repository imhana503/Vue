<script setup>
import { ref, watch } from 'vue';

const count = ref(0);
watch(count,(newVal, oldVal)=>{
  console.log(`카운터 변경, new:${newVal}, old:${oldVal}`);
});
</script>

<template>
  <div class="counter">
    카운터 {{ count }}<br/>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </div>
</template>