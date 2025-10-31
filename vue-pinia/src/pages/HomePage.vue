<template>
  <div>
    <h1>홈</h1>
    <p>현재 상태: <strong>{{ auth.isLoggedIn ? '로그인됨' : '로그아웃' }}</strong></p>

    <router-link v-if="!auth.isLoggedIn" to="/login">로그인 페이지로</router-link>
    <router-link v-else to="/profile">프로필 페이지로</router-link>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
const auth = useAuthStore();

console.log(auth.isLoggedIn)

</script>