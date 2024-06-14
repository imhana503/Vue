<script>
export default {
    name:'ModalComponent',
    props:{
        selectedMovie:Number,
        isModal:Boolean,
        data:Array,
    }
}
</script>

<template>
  <div class="modal" v-if="isModal">
    <div class="inner">
      {{ data[selectedMovie].title }}
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}
</style>
