<template>
  <section v-if="!isLoggedIn">
    <h1>로그인</h1>
    <input type="text" v-model="form.username" placeholder="아이디 입력"/>
    <input type="password" v-model="form.password" placeholder="비밀번호 입력"/>
    <button @click="login">확인</button>
  </section>

  <section v-else>
    <h1>로그인 완료</h1>
    <div>안녕하세요, {{ form.username }}님 👋</div>
    <button @click="logout">로그 아웃</button>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isLoggedIn = ref(false);
const form = reactive({
  username: '',
  userpassword: ''
});

function login(){
  if( form.username && form.password ) {
    isLoggedIn.value = true;
  } else {
    alert('아이디와 비밀번호를 입력하세요.')
  }
}

function logout(){
  isLoggedIn.value = false;
}
</script>
