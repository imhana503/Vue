<template>
    <nav class="navbar">
        <button @click="$store.state.toggle = !$store.state.toggle">  
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
