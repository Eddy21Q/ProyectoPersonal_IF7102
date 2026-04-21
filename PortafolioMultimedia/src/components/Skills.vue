<template>
  <section id="skills" class="skills">
    <h2>Habilidades</h2>

    <div class="list">
      <SkillCard
        v-for="(skill, index) in skills"
        :key="index"
        :skill="skill"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SkillCard from './SkillCard.vue'

// Esto luego vendrá del JSON
const skills = ref(["HTML", "CSS", "JavaScript", "Vue"])
</script>

<style scoped>
.skills {
  padding: 2rem;
}
.list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
