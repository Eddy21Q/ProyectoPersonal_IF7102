<template>
  <button
    class="skill-card"
    :class="{ active }"
    type="button"
    @click="emit('focus-skill', skill)"
  >
    <span class="skill-category">{{ skill.category }}</span>
    <strong class="skill-name">{{ skill.name }}</strong>
    <span class="skill-description">{{ skill.description }}</span>
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
  display: flex;
  min-height: 170px;
  flex-direction: column;
  gap: 0.65rem;
  background: #1a1a1a;
  padding: 1.15rem;
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

.skill-category {
  color: #8bbfda;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.skill-name {
  color: #ffffff;
  font-size: 1.2rem;
}

.skill-description {
  color: #c7c7c7;
  line-height: 1.45;
  text-align: justify;
  text-wrap: pretty;
}
</style>
