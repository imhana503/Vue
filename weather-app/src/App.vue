<script setup>
import Navbar from './components/Navbar.vue';
import MainComp from './components/MainComp.vue';
import About from './components/About.vue';

import { onMounted, ref } from 'vue';
const toggle = ref(true);

const weatherData = ref({
  icon:'icon',
  temp:'temp',
  text:'text',
  city:'incheon',
  location:'location'
});

function getWeather(){
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=1a04a85ea40589be8e06a8562e3de28d`;
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
  })
}

onMounted(()=>{
  getWeather();
  
});

function searchInput(search){
   weatherData.value.city = search;
   getWeather();
}

</script> 

<template>
  <Navbar 
    @buttonToggle="toggle=!toggle"
  />
  <MainComp 
    v-if="toggle"
    :weatherData="weatherData"
    @searchInput="searchInput($event)"
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
