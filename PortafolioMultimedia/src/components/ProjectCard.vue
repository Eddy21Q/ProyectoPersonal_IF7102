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
  width: 100%;
  min-height: 100%;
  background: #1a1a1a;
  padding: 1.2rem;
  border: 1px solid transparent;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
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
  background: #222;
  border-color: #6fb4d8;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
  outline: none;
}

.project-card.active {
  border-color: #6fb4d8;
  background: #20262b;
}

.project-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  margin-bottom: 0.9rem;
  object-fit: cover;
}

.project-label {
  display: block;
  margin-bottom: 0.35rem;
  color: #8bbfda;
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
  line-height: 1.45;
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
  margin-top: 0.9rem;
}

.tech-tag {
  padding: 0.28rem 0.55rem;
  border: 1px solid rgba(111, 180, 216, 0.45);
  border-radius: 999px;
  color: #d8effb;
  background: rgba(111, 180, 216, 0.12);
  font-size: 0.78rem;
  font-weight: 700;
}
</style>
