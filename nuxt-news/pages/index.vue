<template>
  <div class="page">
    <CardComponent v-for="article in data?.articles" :key="article.url" :data="article"/>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "./components/Card.vue";
import type { ApiStructure } from '../typs/api'

const API_KEY = "ccd0c6bb732a4bba8ddfa0f2b240b907";
const API_URL = `https://newsapi.org/v2/everything?q=Apple&from=2025-11-12&sortBy=popularity&apiKey=${API_KEY}`
const { data, pending, error, refresh } = await useAsyncData("getNews", ()=> $fetch(API_URL));



</script>

<style lang="scss" scoped>
.page {
  display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
</style>