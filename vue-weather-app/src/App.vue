<script setup>
import { ref, onMounted } from 'vue';
import store from './store/store';
import Navbar from './components/Navbar.vue';
import MainComp from './components/MainComp.vue';

const weatherData = ref({
  icon: 'icon',
  temp: 0,
  text: 'text',
  location: 'location',
  city: 'Seoul',
});

console.log(store);

const getWeather = () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=1a04a85ea40589be8e06a8562e3de28d`;
  fetch(API_URL)
    .then((res)=>res.json())
    .then(data => {
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
      
    })
    .catch((err)=>{
      console.log('에러가 발생');
    });
}

onMounted(()=>{
  getWeather();
});

const onSearchCity = (city) => {
  weatherData.value.city = city;
}

</script>

<template>
  <Navbar/>
  <p> count: {{ store.state.count }}</p>
  <button @click="store.commit('addCount', 10)">count++</button>
  <MainComp @onSearchCity="onSearchCity" :weatherData="weatherData"/>  
</template>

<style scoped>

</style>
