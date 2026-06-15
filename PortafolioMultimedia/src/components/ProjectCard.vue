<template>
  <button
    class="project-card"
    :class="{ active }"
    type="button"
    @click="emit('select', project)"
  >
    <img :src="project.image" :alt="project.title" />
    <span class="project-label">Proyecto</span>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <span v-if="project.role" class="project-role">{{ project.role }}</span>

    <span v-if="project.technologies?.length" class="tech-list">
      <span
        v-for="technology in project.technologies"
        :key="technology"
        class="tech-tag"
      >
        {{ technology }}
      </span>
    </span>
  </button>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background: rgba(10, 18, 26, 0.9);
  padding: 1rem;
  border: 1px solid rgba(49, 213, 255, 0.14);
  border-radius: 10px;
  text-align: left;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
  transition: transform 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease,
              border-color 0.25s ease;
  cursor: pointer;
  color: inherit;
  font: inherit;
}

.project-card:hover,
.project-card:focus-visible {
  transform: translateY(-6px);
  background: rgba(14, 28, 40, 0.96);
  border-color: #31d5ff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.36);
  outline: none;
}

.project-card.active {
  border-color: #31d5ff;
  background: rgba(14, 28, 40, 0.96);
  box-shadow: 0 0 0 1px rgba(49, 213, 255, 0.18),
              0 14px 28px rgba(0, 0, 0, 0.34);
}

.project-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 7px;
  margin-bottom: 1rem;
  object-fit: cover;
}

.project-label {
  display: block;
  margin-bottom: 0.35rem;
  color: #31d5ff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.project-card h3 {
  color: #f2f2f2;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.45rem;
}

.project-card p {
  margin: 0;
  color: #c7c7c7;
  line-height: 1.5;
  text-align: justify;
  text-wrap: pretty;
}

.project-role {
  display: block;
  margin-top: 0.9rem;
  color: #d8d8d8;
  font-size: 0.92rem;
  font-weight: 700;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  align-items: flex-end;
  margin-top: 0.9rem;
  padding-top: 0.1rem;
}

.tech-tag {
  padding: 0.28rem 0.55rem;
  border: 1px solid rgba(49, 213, 255, 0.32);
  border-radius: 999px;
  color: #d8f6ff;
  background: rgba(49, 213, 255, 0.1);
  font-size: 0.78rem;
  font-weight: 700;
}

@media (max-width: 600px) {
  .project-card p {
    text-align: left;
  }
}
</style>
