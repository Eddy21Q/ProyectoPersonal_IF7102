<template>
  <section id="skills" class="skills">
    <div class="section-heading">
      <h2>Habilidades</h2>
      <p v-if="selectedSkill">
        Tecnologia seleccionada: <strong>{{ selectedSkill.name }}</strong>
      </p>
    </div>

    <div class="skills-list">
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :skill="skill"
        :active="selectedSkill?.name === skill.name"
        @focus-skill="selectSkill"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SkillCard from './SkillCard.vue'

const skills = ref([])
const selectedSkill = ref(null)

const selectSkill = (skill) => {
  selectedSkill.value = skill
}

onMounted(async () => {
  const response = await fetch('/data/data.json')
  const data = await response.json()
  skills.value = data.skills
  selectedSkill.value = data.skills[0] || null
})
</script>

<style scoped>
.skills {
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

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.1rem;
}

@media (max-width: 700px) {
  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .skills {
    padding: 1.5rem 1rem;
  }
}
</style>
