<script setup>
import { ref } from 'vue';
import { useStore } from './../store/store';

const inputText = ref('');
const store = useStore();

</script> 

<template>
<div class="search">
    <input 
        type="search"
        placeholder="지역을 입력해주세요"
        @change="
            inputText = $event.target.value;
            store.searchInput(inputText);
            store.getWeather();
            $event.target.value = '';        
        "
    >
    <button>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
    </button>
</div>
</template>

<style lang="scss">
.search {
    display:flex;
    align-items: center;
    justify-content: center;
    margin:20px;
    position: relative;
    input {
        display: block;
        width:100%;
        padding:10px;
        padding-right:30px;
        border:1px solid rgb(186, 186, 186);
        border-radius: 20px;
    }
    button {
        position:absolute;
        top:50%;
        right:10px;
        transform: translateY(-50%);
        .icon {
            font-size:17px
        }
    }
}
</style>
