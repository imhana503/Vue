<script setup>
  const skills = [
    { name: 'HTML', point: '90%' },
    { name: 'CSS', point: '80%' },
    { name: 'JAVASCRIPT', point: '50%' },
    { name: 'VUE', point: '75%' },
  ]
</script>

<template>
<section id="about" class="container">
  <h1>About</h1>
  <div class="row gx-5">
    <figure class="col-md-6">
      <img src="./../assets/images/profile.jpg" alt="profile">
      <figcaption>About Michael Kwon</figcaption>
    </figure>
    <p class="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit id suscipit similique
      excepturi, rem consequuntur pariatur qui non commodi eos aliquid, porro exercitationem necessitatibus sint
      veritatis cumque quas esse.</p>
  </div>

  <article class="row mt-5">
    <h2>Skills</h2>
    <dl v-for="item in skills">
        <dt class="lead">{{ item.name }}</dt>
        <dd>
          <div 
            class="progress" 
            role="progressbar"
          >
            <div class="progress-bar" :style="{width: item.point}">{{ item.point }}</div>
          </div>
        </dd>
    </dl>
  </article>
</section>
</template>

<style scoped lang="scss">
figure img {
  width: 100%;
}
</style>