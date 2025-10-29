<script setup>
import Grid from '..//Grid.vue';
import { gymHealthFacts } from '../../utils/index';

// 0과 배열 길이 - 1 사이의 임의의 정수를 생성합니다.
const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todaysFact = gymHealthFacts[randomNumber];

</script>

<template>
  <section id="dashboard">
    <div class="card tip-container">
      <h2>Welcome Smoldier</h2>
      <div>
        <p class="tip"><strong>Daily Tip</strong><br/>{{ todaysFact }}</p>
        <button>Start workout &rarr;</button>
      </div>
      <Grid/>
    </div>
  </section>
</template>

<style scoped>
    .tip-container,
    .tip-container div,
    #dashboard {
        display: flex;
    }

    .tip-container,
    #dashboard {
        flex-direction: column;
    }

    #dashboard {
        gap: 2rem;
    }

    .tip-container {
        gap: 0.5rem;
    }

    @media (min-width: 640px) {
        .tip-container {
            gap: 1rem;
        }
    }
</style>
