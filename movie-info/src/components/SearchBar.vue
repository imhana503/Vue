<script>
export default{
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
      const findName = this.data.filter((item)=>{ return item.title.includes(name)});
      findName.length === 0 && alert('해당자료가없습니다');      
    }
  }
}
</script>

<template>
<div class="search-bar">
  <input 
    type="search"
    placeholder="검색어를 입력해주세요"
    @change="
      inputText = $event.target.value;
      $emit('filterMovie', inputText);
      $event.target.value = '';
    "
  >
  <button>검색</button>
</div>
</template>

<style scoped>
.search-bar {
  display:flex;
  align-content: center;
  justify-content: center;
  padding:20px 0;
}
</style>
