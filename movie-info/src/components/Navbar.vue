<script>
export default {
    name:'NavbarComponent'
}
</script>

<template>
    <nav>
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">About</a>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    background: #000;
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 2em;
}
nav a {
    text-decoration: none;
    color: #fff;
}
</style>
