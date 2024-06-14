<script>
export default {
    name:'SearchComponent',
    props:{
      data:Array,
    },
    data(){
      return{
        inputText:'',
      }
    },  
    watch:{
      inputText(name){
        const findName = this.data.filter((movie)=> movie.title.includes(name) );
        if( findName.length === 0 ){
            alert('해당하는 정보가 없습니다.')
        }
      }
    }
   
}
</script>

<template>
  <form class="search-box">
      <input 
        type="text"
        @change="
          $emit('searchMovie',  $event.target.value)
          inputText = $event.target.value;
          $event.target.value = '';
        "
        placeholder="검색어를 입력해주세요"
      >
      <button>검색</button>
  </form>  
</template>

<style scoped>
.search-box {
    padding: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .search-box input {
    padding: 5px 10px;
  }

</style>
