<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = ref([])
const selectedProject = ref(null)

const selectProject = (project) => {
  selectedProject.value = project
}

onMounted(async () => {
  const response = await fetch('/data/data.json')
  const data = await response.json()
  projects.value = data.projects
  selectedProject.value = data.projects[0] || null
})
</script>

<template>
  <section id="gallery" class="gallery">
    <div class="section-heading">
      <h2>Galeria de Proyectos</h2>
      <p v-if="selectedProject">
        Proyecto seleccionado: <strong>{{ selectedProject.title }}</strong>
      </p>
    </div>

    <div class="grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        :active="selectedProject?.title === project.title"
        @select="selectProject"
      />
    </div>

    <aside v-if="selectedProject" class="project-detail">
      <h3>{{ selectedProject.title }}</h3>
      <p>{{ selectedProject.description }}</p>
      <strong v-if="selectedProject.role">{{ selectedProject.role }}</strong>
      <div v-if="selectedProject.technologies?.length" class="detail-tech-list">
        <span
          v-for="technology in selectedProject.technologies"
          :key="technology"
          class="detail-tech-tag"
        >
          {{ technology }}
        </span>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.gallery {
  padding: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  color: #e6e6e6;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.section-heading h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.section-heading p {
  margin: 0;
  color: #b9c7d4;
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-detail {
  margin-top: 1.5rem;
  padding: 1.2rem 1.4rem;
  border-left: 4px solid #6fb4d8;
  background: #141414;
  border-radius: 8px;
}

.project-detail h3 {
  margin: 0 0 0.5rem;
  color: #ffffff;
}

.project-detail p {
  margin: 0;
  color: #cfcfcf;
  line-height: 1.5;
}

.project-detail strong {
  display: block;
  margin-top: 0.8rem;
  color: #ffffff;
}

.detail-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.9rem;
}

.detail-tech-tag {
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  color: #d8effb;
  background: rgba(111, 180, 216, 0.14);
  font-size: 0.78rem;
  font-weight: 700;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .gallery {
    padding: 1.5rem 1rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
