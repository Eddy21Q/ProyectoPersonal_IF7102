<template>
  <button
    class="skill-card"
    :class="{ active }"
    :style="{ '--skill-delay': `${index * 90}ms` }"
    type="button"
    @click="emit('focus-skill', skill)"
  >
    <span class="skill-topline">
      <span class="skill-mark">{{ skill.name.charAt(0) }}</span>
      <span class="skill-category">{{ skill.category }}</span>
    </span>
    <strong class="skill-name">{{ skill.name }}</strong>
    <span class="skill-description">{{ skill.description }}</span>

    <span class="skill-motion" aria-hidden="true">
      <span class="skill-motion-line"></span>
      <span class="skill-motion-dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </span>
  </button>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
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
  min-height: 206px;
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
  opacity: 0;
  animation: skill-card-enter 0.58s ease forwards;
  animation-delay: var(--skill-delay);
  overflow: hidden;
  position: relative;
}

.skill-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 0%,
    rgba(49, 213, 255, 0.12) 42%,
    transparent 64%
  );
  transform: translateX(-120%);
  animation: skill-card-scan 3.8s ease-in-out infinite;
  animation-delay: calc(var(--skill-delay) + 0.6s);
  pointer-events: none;
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

.skill-card.active .skill-mark {
  animation: skill-mark-pulse 1.8s ease-in-out infinite;
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

.skill-motion {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: auto;
}

.skill-motion-line {
  display: block;
  flex: 1;
  height: 2px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  position: relative;
}

.skill-motion-line::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 42%;
  height: 100%;
  background: linear-gradient(90deg, #31d5ff, #45f0a2);
  box-shadow: 0 0 16px rgba(49, 213, 255, 0.52);
  animation: skill-line-travel 2.2s ease-in-out infinite;
  animation-delay: var(--skill-delay);
}

.skill-motion-dots {
  display: inline-flex;
  gap: 0.32rem;
}

.skill-motion-dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #31d5ff;
  box-shadow: 0 0 10px rgba(49, 213, 255, 0.48);
  animation: skill-dot-wave 1.15s ease-in-out infinite;
}

.skill-motion-dots span:nth-child(2) {
  animation-delay: 0.16s;
}

.skill-motion-dots span:nth-child(3) {
  animation-delay: 0.32s;
}

@keyframes skill-card-enter {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes skill-card-scan {
  0%,
  52% {
    transform: translateX(-120%);
  }

  78%,
  100% {
    transform: translateX(120%);
  }
}

@keyframes skill-line-travel {
  0% {
    transform: translateX(-120%);
  }

  100% {
    transform: translateX(250%);
  }
}

@keyframes skill-mark-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 rgba(49, 213, 255, 0);
  }

  50% {
    box-shadow: 0 0 18px rgba(49, 213, 255, 0.42);
  }
}

@keyframes skill-dot-wave {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.45;
  }

  50% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .skill-card::before,
  .skill-card.active .skill-mark,
  .skill-motion-line::after,
  .skill-motion-dots span {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 600px) {
  .skill-description {
    text-align: left;
  }
}
</style>
