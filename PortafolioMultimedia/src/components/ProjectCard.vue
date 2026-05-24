<template>
  <div class="project-card">
    <img :src="project.image" :alt="project.title" />
    <h3>{{ project.title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
</script>

<style scoped>
.project-card {
  background: #1a1a1a;                     /* FONDO OSCURO */
  padding: 1.2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.5);   /* SOMBRA PROFESIONAL */
  transition: transform 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease;
  cursor: pointer;
}

/* Hover elegante */
.project-card:hover {
  transform: translateY(-6px);
  background: #222;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

/* Imagen */
.project-card img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0.8rem;
  object-fit: cover;
}

/* Título */
.project-card h3 {
  color: #f2f2f2;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 0.5rem;
}
</style>
