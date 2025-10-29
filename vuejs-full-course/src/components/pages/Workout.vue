<script setup>
import { workoutProgram } from '../../utils/index';
const selectedWorkout = 4;
const { workout, warmup } = workoutProgram[selectedWorkout];
console.log(warmup)
</script>

<template>
<Portal hello="world">
  <div class="plan-card card">
    <div class="plan-card-header">
      <p>Day {{ selectedWorkout < 9 ? `0${selectedWorkout+1}` : selectedWorkout+1 }}</p>
      <i class="fa-solid fa-dumbbell"></i>
    </div>
  </div>
</Portal>
</template>

<style scoped>

</style>
