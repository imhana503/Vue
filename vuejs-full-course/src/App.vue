<script setup>
import Layout from './components/layouts/Layout.vue';
import Welcome from './components/pages/Welcome.vue';
import Dashboard from './components/pages/Dashboard.vue';
import Workout from './components/pages/Workout.vue';

const selectDisplay = 3
</script>

<template>
  <Layout>
    <!-- PAGE1 -->
    <Welcome v-if="selectDisplay == 1"/>   

    <!-- PAGE2 -->
    <Dashboard v-if="selectDisplay == 2"/>

    <!-- PAGE3 -->
    <Workout v-if="selectDisplay == 3"/>
  </Layout>
</template>

<style scoped>

</style>
