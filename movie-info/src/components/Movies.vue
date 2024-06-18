<script>
export default{
    props:{
        data:Array
    }
}
</script>

<template>
    <h2>영화정보</h2>
    <div class="item" v-for="movie in data" :key="movie.id">
        <figure>
            <img :src="movie.imgUrl" :alt="movie.title">
        </figure>
        <div class="info">
            <h3>{{ movie.title }}</h3>
            <p>개봉 : {{ movie.year }}</p>
            <p>장르 : {{ movie.category }}</p>
            <div>
                <button @click="$emit('increseLike', movie.id)">좋아요</button> {{ movie.like }}
            </div>
            <button @click="$emit('openModal', movie.id)">상세보기</button>
        </div>
    </div>
</template>

<style scoped>
button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
    display: flex;
    align-items: center;
    gap:2rem;
}
.item figure {
    width:20%;
}

.item img {
    max-width: 100%;
}

.item .info {

}
</style>
