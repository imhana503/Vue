<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'; // vuex에서 store 가져옴
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import About from './components/About.vue';

const store = useStore(); // store 초기화

onMounted(()=>{
    store.dispatch('getWeather');
})


</script>

<template>
    <Navbar />
  <!-- $store.state.toggle이 false이면 Main 컴포넌트를 보여줌 -->
    <div v-if="$store.state.toggle">
      <About />
    </div>
    <div v-else>
      <Main />
    </div>
</template>

<style scoped>

</style>
