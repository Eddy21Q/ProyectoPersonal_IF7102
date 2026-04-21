<template>
  <section id="gallery" class="gallery">
    <h2>Galería de Proyectos</h2>

    <div class="grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

// Esto luego se reemplaza con fetch()
const projects = ref([
  { title: "Proyecto 1", image: "/src/assets/images/p1.jpg" },
  { title: "Proyecto 2", image: "/src/assets/images/p2.jpg" }
])
</script>

<style scoped>
.gallery {
  padding: 2rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
