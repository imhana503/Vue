<script>
export default{
  props:{
    text:String,
  },
  data(){
    return{
      isOpen:true,
    }
  },
}
</script>

<template>
   
<div class="event" :class="{ show : isOpen }">
  <p>{{ text }}</p>
  <button @click="isOpen = false">X</button>
</div>

</template>

<style scoped>
.event {
  background-color:#dbdbdb;
  padding:1rem;
  display:none;
  align-items: center;
}

.event.show{
  display:flex;
}

.event p {
  flex-grow: 1;
}


</style>
