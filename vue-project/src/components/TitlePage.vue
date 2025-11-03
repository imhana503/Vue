<script setup>

</script>

<template>
  <section id="title">
    <div class="container">
      <div class="detail row">
        <figure class="col">
          <img src="../assets/images/title.png" alt="title">
        </figure>
        <div class="text col">
          <h2>Hello,<br>I'm Doolee</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#title {
  .container {
    $navbar_height: 56px; // navbar 높이값
    height: 100vh;
    padding: $navbar_height;

    .row {
      height: 100%;
      flex-direction: row-reverse;
    }
  }

}
figure {
  img {
    width: 100%;
  }
}
</style>
