<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <!-- 라우트 이름으로 이동 -->
    <router-link :to="{name:'About'}">Abouot 이름으로 이동</router-link>

    <router-link :to="{ name: 'UserProfile', params: { id: 123 } }">User 123</router-link>

    <!-- 라우트 컴포넌트가 표시될 영역 -->
    <router-view></router-view>
  </nav>
</template>

<script setup>

</script>