<script setup>
import Searchbar from './Searchbar.vue';
import Weather from './Weather.vue';

const props = defineProps({
    weatherData : Object
}); 
const emits = defineEmits(['searchInput']);

function searchInput(search){
    emits('searchInput', search)
}
</script> 

<template>
    <Searchbar
        @searchInput="searchInput($event)"
    />
    <Weather
        :weatherData="props.weatherData"
    />   
   
</template>

<style lang="scss">

</style>
