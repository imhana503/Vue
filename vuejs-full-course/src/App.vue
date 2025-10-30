<script setup>
import { ref, computed, onMounted } from 'vue';
import Layout from './components/layouts/Layout.vue';
import Welcome from './components/pages/Welcome.vue';
import Dashboard from './components/pages/Dashboard.vue';
import Workout from './components/pages/Workout.vue';
import { workoutProgram } from './utils';


const defaultData = {};
for(let workoutIdx in workoutProgram) {
  const workoutData  = workoutProgram[workoutIdx];
  defaultData[workoutIdx] = {}

  for(let e of workoutData.workout){
    defaultData[workoutIdx][e.name] = '';
  }
}
const selectedDisplay = ref(1);
const data = ref(defaultData);
const selectedWorkout = ref(-1);

const handleChangeDisplay = (idx) => {
  selectedDisplay.value = idx;
}

const handleSelectWorkout = (idx) => {
  selectedDisplay.value = 3;
  selectedWorkout.value = idx;
}

const handleResetPlan = () => {
  selectedDisplay.value = 2;
  selectedWorkout.value = -1;
  data.value = defaultData;
  localStorage.removeItem('workouts');
}

const firstIncompleteWorkoutIndex  = computed(()=>{
  const allWorkouts = data.value;
  if (!allWorkouts) { return -1 }
  for( const [index, workout] of Object.entries(allWorkouts) ){ //객체의 모든 속성을 [키, 값] 형태로 배열로 바꿔줌
    const isComplete = Object.values(workout).every(ex => !!ex);
    if (!isComplete) {
      return parseInt(index)
    }
    return -1 
  }
});


const isWorkoutComplete = computed(()=>{
  const currWorkout = data.value?.[selectedWorkout.value];
  if (!currWorkout) { return false } 

  const isCompleteCheck = Object.values(currWorkout).every(ex => !!ex)
  console.log('ISCOMPLETE: ', isCompleteCheck)
  return isCompleteCheck
});

const handleSaveWorkout = () => {
  localStorage.setItem('workouts', JSON.stringify(data.value));

  selectedDisplay.value = 2;
  selectedWorkout.value = -1
}

onMounted(()=>{
  if (!localStorage) {return}
  if (localStorage.getItem('workouts')) {
    console.log('있음');
    const savedData = JSON.parse(localStorage.getItem('workouts'))
    data.value = savedData
    selectedDisplay.value = 2 
  }
});


</script>

<template>
  <Layout>
    <!-- PAGE1 -->
    <Welcome :handleChangeDisplay="handleChangeDisplay" v-if="selectedDisplay == 1"/>   

    <!-- PAGE2 -->
    <Dashboard :handleResetPlan="handleResetPlan" :firstIncompleteWorkoutIndex="firstIncompleteWorkoutIndex" :handleSelectWorkout="handleSelectWorkout" v-if="selectedDisplay == 2"/>

    <!-- PAGE3 -->
    <Workout :handleSaveWorkout="handleSaveWorkout" :data="data" :selectedWorkout="selectedWorkout" :isWorkoutComplete="isWorkoutComplete" v-if="workoutProgram?.[selectedWorkout]"/>
  </Layout>
</template>

<style scoped>

</style>
