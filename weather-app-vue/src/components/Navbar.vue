<script setup>
import { useStore } from './../store/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { toggle } = storeToRefs(store);
</script>
<template>
    <nav class="navbar">
        <button @click="toggle = !toggle">  
            <font-awesome-icon :icon="['fas', 'bars']" class="ico"/>
        </button>
    </nav>
</template>

<style lang="scss">
.navbar {
    display:flex;
    justify-content: end;
    align-content: center;
    height:50px;
    padding:0 10px;
    .ico {
        font-size:20px
    }
}
</style>
