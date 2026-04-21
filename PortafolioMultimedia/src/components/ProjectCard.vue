<template>
  <div class="project-card">
    <img :src="project.image" :alt="project.title" />
    <h3>{{ project.title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
</script>

<style scoped>
.project-card {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}
.project-card img {
  width: 100%;
  border-radius: 8px;
}
</style>
