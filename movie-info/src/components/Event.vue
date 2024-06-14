<script>
export default {
    name:'EventComponent',
    props:{
        text:String(),
    },
    data(){
      return{
        isOpen : true
      }
    }
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
  width: 100%;
  background: #333;
  padding: 5px 1em;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  color: #fff;
  text-align: center;
  margin-bottom: 1em;
  
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s;
}

.show {
  opacity: 1;
  max-height: 100px;
}
</style>
