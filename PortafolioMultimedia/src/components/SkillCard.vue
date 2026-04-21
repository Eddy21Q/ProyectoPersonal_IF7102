<template>
  <div class="skill-card">
    <p>{{ skill }}</p>
  </div>
</template>

<script setup>
defineProps({
  skill: String
})
</script>

<style scoped>
.skill-card {
  padding: 1rem 1.5rem;
  background: #222;
  color: white;
  border-radius: 8px;
  transition: transform 0.2s;
}
.skill-card:hover {
  transform: scale(1.05);
}
</style>
