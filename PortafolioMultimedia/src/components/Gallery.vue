<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = ref([])

onMounted(async () => {
  const response = await fetch('/data/data.json')
  const data = await response.json()
  projects.value = data.projects
})
</script>

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

<style scoped>
.gallery {
  padding: 2rem;
  max-width: 1300px;   /* ANCHO REAL PARA PC */
  margin: 0 auto;
  color: #e6e6e6;
}

/* Título */
.gallery h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
}

/* GRID RESPONSIVE */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* MÁS ANCHO */
  gap: 2rem;
}

/* ======== RESPONSIVE ======== */

/* Tablets */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

/* Móviles */
@media (max-width: 600px) {
  .gallery {
    padding: 1.5rem 1rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
