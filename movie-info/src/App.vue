<script>
import data from './assets/movies'; //영화데이터
import Navbar from './components/Navbar.vue';
import Modal from './components/Modal.vue';
import Event from './components/Event.vue';
import Movies from './components/Movies.vue';
import Search from './components/Search.vue';


export default{
  components:{
    Navbar,
    Modal,
    Event,
    Movies,
    Search,
  },
  data(){
    return{
      isModal: false,
      selectedMovie:0,
      data:data,
      data_temp:[...data],
      text:[
        'NETPLIX 강렬한 운명의 드라마, 경기크리처',
        '디즈니 100주년 기념작, 위시',
        '그날, 대한민국의 운명이 바뀌었다, 서울의 봄'
      ],
      eventTextNum:0,
      interval:null,
    }
  },
  methods: {
    increaseLike(id) {
      this.data.find((movie)=> {
          if( movie.id === id ){
            movie.like++;
          }
        }
      )
    },
    searchMovie(title){
      this.data_temp = this.data_temp.filter((movie)=> movie.title.includes(title));      
    },
    showAllMovie(){
      this.data_temp = [...data];
    }
  },
  mounted(){
    this.interval = setInterval(()=>{
      if( this.text.length -1 === this.eventTextNum  ){
        this.eventTextNum = 0;
      }
      this.eventTextNum++;
    },3000)
  },
  unmounted() {
    clearInterval(this.interval)
  },
}
</script>

<template>
  <Navbar/>
  <Event :text="text[eventTextNum]"/>
  
  <Search
    :data="data_temp"
    @searchMovie="searchMovie($event)"
  />
  <p><button @click="showAllMovie">전체보기</button></p>

  <h1>영화정보</h1>
  <Movies
    :data="data_temp"
    @openModal="isModal=true, selectedMovie=$event"
    @handleLike="increaseLike($event)"
  />

  <Modal
    :selectedMovie="selectedMovie"
    :isModal="isModal"
    :data="data"
    @closeModal="isModal=false"
  />
</template>

<style scoped>
.bg-yellow {
  background: gold;
  padding: 10px;
}

* {
  box-sizing: border-box;
  padding:0;
  margin: 0;
}

body {
  padding:0;
  margin: 0;
}

.container {
  padding: 20px;
}



</style>
