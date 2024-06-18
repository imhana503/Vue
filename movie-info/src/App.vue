<script>
import data from './assets/movies'; /* data */
import Movies from './components/Movies.vue'; 
import Modal from './components/Modal.vue'; 
import Navbar from './components/Navbar.vue'; 
import Event from './components/Event.vue'; 
import SearchBar from './components/SearchBar.vue'; 

export default{
  components:{
    Movies:Movies,
    Modal:Modal,
    Navbar:Navbar,
    Event:Event,
    SearchBar:SearchBar,
  },
  data(){
    return{
      data:data,
      data_temp:[...data],
      isModal:false,
      selectedMovie:0,
      text:[
        'NETPLIX 강렬한 운명의 드라마, 경기크리처',
        '디즈니 100주년 기념작, 위시',
        '그날, 대한민국의 운명이 바뀌었다, 서울의 봄'
      ],
      eventNum:0,
      interval:null,
    }
  },
  methods: {
    increseLike(id){
      this.data.find((item)=> { return item.id == id ? item.like++ : null })
    },
    filterMovie(movieName){
      this.data_temp = this.data.filter((item)=> { return item.title.includes(movieName) })
    },
    showMovie(){
      this.data_temp = [...this.data];
    }
  },
  mounted() {
    this.interval = setInterval(()=>{
      this.eventNum === this.text.length-1 ? this.eventNum = 0 : this.eventNum++;     
    }, 1000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
}
</script>

<template>
  <Navbar/>
  <Event
    :text="text[eventNum]"   
  />
  <SearchBar
    :data="data_temp"
    @filterMovie="filterMovie($event)"
  />

  <div>
    <button @click="showMovie">전체보기</button>
  </div>

  <Movies
    :data="data_temp"
    @increseLike="increseLike($event)"
    @openModal="isModal = true; selectedMovie=$event"
  />
  <Modal 
    :isModal="isModal"
    :selectedMovie="selectedMovie"
    :data="data"
    @closeModal="isModal = false"
  />
  
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  cursor: pointer;
}

</style>
