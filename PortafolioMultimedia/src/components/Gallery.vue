<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { getPortfolioData } from '@/services/portfolioData'

const projects = ref([])
const selectedProject = ref(null)

const selectProject = (project) => {
  selectedProject.value = project
}

onMounted(async () => {
  const data = await getPortfolioData()
  projects.value = data.projects
  selectedProject.value = data.projects[0] || null
})
</script>

<template>
  <section id="gallery" class="gallery">
    <div class="section-heading">
      <h2>Galería de Proyectos</h2>
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
  padding: 2.4rem 2rem 2rem;
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
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
}

.section-heading p {
  margin: 0;
  color: #9fb5c4;
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.35rem;
}

.project-detail {
  margin-top: 1.5rem;
  padding: 1.35rem 1.5rem;
  border: 1px solid rgba(49, 213, 255, 0.16);
  border-left: 3px solid #31d5ff;
  background: rgba(10, 18, 26, 0.88);
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}

.project-detail h3 {
  margin: 0 0 0.5rem;
  color: #ffffff;
}

.project-detail p {
  margin: 0;
  color: #cfcfcf;
  line-height: 1.5;
  text-align: justify;
  text-wrap: pretty;
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
  color: #d8f6ff;
  background: rgba(49, 213, 255, 0.12);
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
    padding: 1.5rem 0.35rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .project-detail {
    padding: 1.15rem;
  }

  .project-detail p {
    text-align: left;
  }
}
</style>
