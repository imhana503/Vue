<template>
  <div>
    <h1>프로필</h1>
    <p>안녕하세요. {{ auth.user.name }}님</p>
    <button @click="logout">로그아웃</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

const auth = useAuthStore();
const router = useRouter();

function logout(){
  auth.logout();
  router.push('/')
}

</script>  