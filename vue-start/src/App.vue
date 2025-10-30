<template>
  <section v-if="!isLoggedIn" class="login">
    <h2>로그인</h2>
    <input v-model="form.username" type="text" placeholder="아이디" />
    <input v-model="form.password" type="password" placeholder="비밀번호" />
    <button @click="login">로그인</button>
  </section>

  <section v-else class="main">
    <h2>안녕하세요, {{ form.username }}님 👋</h2>
    <button @click="logout">로그아웃</button>
  </section>

  <div class="counter">
    <h3>카운터: {{ count }}</h3>
    <button @click="count--">-</button>
    <button @click="count++">+</button>
  </div>

  <div class="todo">
    <h3>할 일 목록</h3>
    <input v-model="newTodo" placeholder="할 일 입력..." @keyup.enter="addTodo" />
    <button @click="addTodo">추가</button>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </label>
        <button @click="removeTodo(index)">삭제</button>
      </li>
    </ul>

    <p>남은 할 일: {{ remaining }}개</p>
  </div>

</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue';

//로그인 상태
const isLoggedIn = ref(false);
const form = reactive({
  username: '',
  password: ''
})

function login(){
  if(form.username && form.password){
    isLoggedIn.value = true;
  } else {
    alert('아이디와 비밀번호를 입력하세요.')
  }
} 

function logout(){
  isLoggedIn.value = false;
  form.username = '';
  form.password = '';
}

//카운터
const count = ref(0);
watch(count, (newVal, oldVal) => {
  console.log(`카운터 변경: new:${newVal}, old: ${oldVal}`)
});

//투두 리스트
const todos = ref([
  { text: 'Vue 3 공부하기', done: false },
  { text: '점심 먹기', done: true }
])
const newTodo = ref('')

function addTodo() {
  if (!newTodo.value.trim()) return
  todos.value.push({ text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(index) {
  todos.value.splice(index, 1)
}

const remaining = computed(() => todos.value.filter(t => !t.done).length)

</script>

<style scoped>
.app {
  font-family: sans-serif;
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
}
.login, .main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
button {
  cursor: pointer;
}
.done {
  text-decoration: line-through;
  color: gray;
}
.counter, .todo {
  margin-top: 1rem;
}
</style>
