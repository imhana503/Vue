<template>
<div class="weather">
    <div class="weather-item">  
        <img 
            :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`" 
            :alt="$store.state.weatherData.text"
        >
        {{ $store.state.weatherData.icon }}
    </div>
    <div class="weather-item temp">{{ $store.state.weatherData.temp }}</div>
    <div class="weather-item">{{ $store.state.weatherData.text }}</div>
    <div class="weather-item">{{ $store.state.weatherData.city }}, {{ $store.state.weatherData.location }}</div>
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
