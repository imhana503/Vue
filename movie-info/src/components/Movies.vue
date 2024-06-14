<script>
export default {
    name:'MoviesComponent',
    props:{
        data:Array,
    }
}
</script>

<template>
    <div v-for="(movie) in data" :key="movie.id">
        <figure>
          <img :src="`${movie.imgUrl}`" :alt="movie.title">
        </figure>
        <div class="info">
            <h3 class="bg-yellow">{{ movie.title }}</h3>
            <p>개봉 : {{ movie.year }}</p>
            <p>장로 : {{ movie.category }}</p>
            <button @click="$emit('handleLike', movie.id)">좋아요</button>
            <span>{{ movie.like }} </span>
            <p><button @click="$emit('openModal', movie.id)">상세보기</button></p>
        </div>
    </div>
</template>

<style scoped>
.item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 20px;
  display: flex;
  gap: 30px;
}

figure {
  width: 30%;
  margin: 0;
}

figure img {
  width: 100%;
}

</style>
