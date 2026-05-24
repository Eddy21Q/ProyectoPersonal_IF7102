<template>
  <section id="skills" class="skills">
    <h2>Habilidades</h2>

    <div class="skills-list">
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :skill="skill.name"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SkillCard from './SkillCard.vue'

const skills = ref([])

onMounted(async () => {
  const response = await fetch('/data/data.json')
  const data = await response.json()
  skills.value = data.skills
})
</script>

<style scoped>
/* CONTENEDOR PRINCIPAL */
.skills {
  padding: 2rem;
  max-width: 1300px;        /* ANCHO REAL PARA PC */
  margin: 0 auto;
  color: #e6e6e6;
}

/* TÍTULO */
.skills h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
}

/* GRID DE HABILIDADES */
.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* MÁS ELEGANTE */
  gap: 1.5rem;
}

/* TARJETA */
.skill-card {
  background: #1a1a1a;
  color: #f2f2f2;
  padding: 1rem 1.4rem;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.5);
  text-align: center;
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  cursor: default;
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
}

/* ANIMACIÓN DE ENTRADA */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* HOVER */
.skill-card:hover {
  transform: translateY(-6px);
  background: #222;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

/* TEXTO */
.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .skills {
    padding: 1.5rem 1rem;
  }
}
</style>
