<template>
  <div>
    <h1>로그인</h1>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" placeholder="로그인"/>
      <input type="passowrd" v-model="password" placeholder="비밀번호"/>
      <button type="submit">로그인</button>
    </form>
    <p  v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');
const error = ref('');

function handleLogin(){
  const ok = auth.login(username.value, password.value)
  console.log(ok)
  if(ok) {
    router.push('/profile');
  } else {
    error.value =  '아이디 또는 비밀번호가 올바르지 않습니다.';  
  }
}
</script>