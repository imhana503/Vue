<script setup>
import { ref, computed } from 'vue';

const newTodo = ref('');

const todos = ref([
  { text: 'Vue 3 공부하기', done: false },
  { text: '점심 먹기', done: true }
]);

function addTodo(){
  todos.value.push({ text:newTodo.value, done:false });
  newTodo.value = '';
}

function removeTodo(index){
  todos.value.splice(index, 1);
}

const remaining = computed(()=> todos.value.filter((t)=> !t.done ).length );
</script>

<template>
  <div class="todo">
    <h1>할 일 목록</h1>

    <div>
      <input v-model="newTodo" type="text" placeholder="할 일 입력..." @keyup.enter="addTodo"/>
      <button @click="addTodo">추가</button>  
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" :id="'todo'+index" :checked="todo.done" v-model="todo.done"/> 
        <label :for="'todo'+index"><span>{{ todo.text }}</span></label>
        <button @click="removeTodo(index)">삭제</button>
      </li>
    </ul>
    <p>남은할일 : {{ remaining }}</p>
  </div>
</template>

