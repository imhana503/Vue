<script setup>
import SearchBar from './SearchBar.vue';
import WeatherInfo from './WeatherInfo.vue';

</script>


<template>
    <div class="container">
        <SearchBar/>
        <WeatherInfo/>
    </div>
</template>

<style scoped>
  .container {
    padding: 20px;
    /* background: #fff; */
    height: calc(100vh - 66px);
  }
</style>
