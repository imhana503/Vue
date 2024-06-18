<script>
export default{
  props:{
    isModal:Boolean,
    data:Array,
    selectedMovie:Number
  }
}
</script>
  
<template>
   <div class="modal" v-if="isModal">
      <div class="inner">
        <h2>{{ data[selectedMovie].title }}</h2>
        <p>{{ data[selectedMovie].category }}</p>
        <button class="close" @click="$emit('closeModal')">x</button>
      </div>
   </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.modal .inner {
  background-color:#fff;
  width:80%;
  padding:20px;
  border-radius: 10px;
  position:relative
}

.modal .inner .close {
  position: absolute;
  top:20px; 
  right:20px;
}
</style>
