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
  background: #1a1a1a;
  padding: 1rem 1.4rem;
  border-radius: 10px;
  color: #f2f2f2;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.5);
  transition: transform 0.25s ease,
              background 0.25s ease,
              box-shadow 0.25s ease;
  cursor: default;
}

.skill-card:hover {
  transform: translateY(-6px);
  background: #222;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

.skill-card p {
  margin: 0;
  font-size: 1.1rem;
}
</style>
