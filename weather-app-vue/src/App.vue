<script setup>
import Navbar from './components/Navbar.vue';
import MainComp from './components/MainComp.vue';
import About from './components/About.vue';

import { onMounted, ref } from 'vue';
import { useStore } from './store/store';

const store = useStore();

onMounted(()=>{
  store.getWeather()
});

</script> 

<template>
  <Navbar />
  <MainComp 
    v-if="!toggle"
  />
  <About v-else/>  
</template>

<style lang="scss">
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

button { 
  background-color:transparent;
  border:none;
}


</style>
