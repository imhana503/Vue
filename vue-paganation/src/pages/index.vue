<template>
  <div class="page">
    <BasicLayout theme="blue">
      <div class="page__container">
        <section class="page__container__navigation">
          <Navigation/>
        </section>
        <section class="page__container__notice">
          <Notice/>
        </section>
      </div>
    </BasicLayout>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@components/atoms/layout/BasicLayout.vue';
import Navigation from '@components/organisms/Navigation.vue';
import Notice from '@components/organisms/Notice.vue';
</script>

<style lang="scss">
.page {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: black; 

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;

    &__navigation {
      width: 20%;
      height: 100%;
    }
    &__notice {
      width: 80%;
      height: 100%;
    }
  }
}
</style>