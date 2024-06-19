<script setup>
const props = defineProps({
    weatherData : Object
}); 


</script> 

<template>
<div class="weather">
    <div class="weather-item">  
        <img 
            :src="`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`" 
            :alt="weatherData.text"
        >
        {{ weatherData.icon }}
    </div>
    <div class="weather-item temp">{{ weatherData.temp }}</div>
    <div class="weather-item">{{ weatherData.text }}</div>
    <div class="weather-item">{{ weatherData.city }}, {{ weatherData.location }}</div>
</div>
</template>

<style lang="scss">
.weather {
    padding:20px;
    &-item {
        padding:30px;
        border:1px solid rgb(192, 192, 192);
    }
    &-item + &-item {
        margin-top:20px
    }
    .temp {
        font-size:30px;
    }
    img {
        max-width:100%;
    }
}
</style>
