<template>
    <section id="detail" class="container">
        <h1>{{ data[$route.params.id].title }}</h1>
      asda
    </section>
</template>

<script setup>
  const props = defineProps({
    data: Array,
  }) 
</script>