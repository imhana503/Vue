<script setup>
import SearchBar from './SearchBar.vue';
import WeatherInfo from './WeatherInfo.vue';

const props = defineProps({
  weatherData:Object
});

const emits = defineEmits(['onSearchCity']);

const onSearchCity = (city) => {
  emits('onSearchCity', city);  
}

</script>

<template>
  <SearchBar @onSearchCity="onSearchCity"/>
  <WeatherInfo :weatherData="props.weatherData"/>
</template>