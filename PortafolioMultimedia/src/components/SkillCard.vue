<template>
  <button
    class="skill-card"
    :class="{ active }"
    type="button"
    @click="emit('focus-skill', skill)"
  >
    <span class="skill-topline">
      <span class="skill-mark">{{ skill.name.charAt(0) }}</span>
      <span class="skill-category">{{ skill.category }}</span>
    </span>
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
  min-height: 178px;
  flex-direction: column;
  gap: 0.7rem;
  background: rgba(10, 18, 26, 0.9);
  padding: 1.05rem;
  border: 1px solid rgba(49, 213, 255, 0.14);
  border-radius: 8px;
  color: #f2f2f2;
  text-align: left;
  font: inherit;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
  transition: transform 0.25s ease,
              background 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
  cursor: pointer;
}

.skill-card:hover,
.skill-card:focus-visible {
  transform: translateY(-6px);
  background: rgba(14, 28, 40, 0.96);
  border-color: #31d5ff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.36);
  outline: none;
}

.skill-card.active {
  border-color: #31d5ff;
  background: rgba(14, 28, 40, 0.96);
}

.skill-topline {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.skill-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(49, 213, 255, 0.34);
  border-radius: 8px;
  color: #d8effb;
  background: rgba(49, 213, 255, 0.09);
  font-size: 0.9rem;
  font-weight: 900;
}

.skill-category {
  color: #31d5ff;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.skill-name {
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.2;
}

.skill-description {
  color: #c7c7c7;
  line-height: 1.5;
  text-align: justify;
  text-wrap: pretty;
}
</style>
