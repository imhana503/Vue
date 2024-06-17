<script setup>

</script>

<template>
    <div class="weather-info">
        <div class="icon">
            <img
                :src="`https://openweathermap.org/img/wn/${$store.state.weather.icon}@2x.png`"
                :alt="`${$store.state.weather.icon}`"
            />
        </div>
         <div class="temp">{{ ($store.state.weather.temp - 273.15).toFixed(1) }}&deg;</div>
        <div class="text">{{ $store.state.weather.text }}</div>
        <div class="location">
            {{ $store.state.weather.city  }},
            {{ $store.state.weather.location }}
        </div>
    </div>
    
</template>

<style scoped langs="scss">
.weather-info {
    padding: 20px;
    & > div {
        margin-bottom: 20px;
        padding: 20px;
        border: 1px solid #ccc;
    }
    .temp {
      font-size: 2em;
    }
}
</style>
