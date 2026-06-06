<template>
  <button
    class="skill-card"
    :class="{ active }"
    type="button"
    @click="emit('focus-skill', skill)"
  >
    <span class="skill-name">{{ skill.name }}</span>
    <span class="skill-level">{{ skill.level }}%</span>

    <span class="progress" aria-hidden="true">
      <span class="progress-bar" :style="{ width: `${skill.level}%` }"></span>
    </span>
  </button>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['focus-skill'])
</script>

<style scoped>
.skill-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.8rem;
  align-items: center;
  background: #1a1a1a;
  padding: 1rem 1.1rem;
  border: 1px solid transparent;
  border-radius: 8px;
  color: #f2f2f2;
  text-align: left;
  font: inherit;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
  transition: transform 0.25s ease,
              background 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
  cursor: pointer;
}

.skill-card:hover,
.skill-card:focus-visible {
  transform: translateY(-6px);
  background: #222;
  border-color: #6fb4d8;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
  outline: none;
}

.skill-card.active {
  border-color: #6fb4d8;
  background: #20262b;
}

.skill-name {
  font-size: 1.05rem;
  font-weight: 700;
}

.skill-level {
  color: #8bbfda;
  font-weight: 700;
}

.progress {
  grid-column: 1 / -1;
  height: 8px;
  overflow: hidden;
  background: #303030;
  border-radius: 999px;
}

.progress-bar {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #6fb4d8, #9bd36a);
  border-radius: inherit;
  animation: fillBar 0.8s ease-out;
}

@keyframes fillBar {
  from { width: 0; }
}
</style>
