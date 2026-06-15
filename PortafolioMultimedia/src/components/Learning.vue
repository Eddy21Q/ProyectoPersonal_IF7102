<template>
  <section id="learning" class="learning" aria-labelledby="learning-title">
    <div class="section-heading">
      <span>Actualmente aprendiendo</span>
      <h2 id="learning-title">Áreas que estoy fortaleciendo</h2>
    </div>

    <div class="learning-grid">
      <article v-for="item in learningItems" :key="item.title" class="learning-item">
        <span>{{ item.area }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const learningItems = [
  {
    area: 'Frontend',
    title: 'Vue 3 y componentes',
    description: 'Mejorar la creación de interfaces reactivas, organizadas y fáciles de mantener.'
  },
  {
    area: 'Diseño',
    title: 'Experiencia de usuario',
    description: 'Construir pantallas más claras, consistentes y agradables para las personas usuarias.'
  },
  {
    area: 'Datos',
    title: 'JSON, APIs y bases de datos',
    description: 'Fortalecer la carga de datos, consultas y conexión entre frontend, backend y almacenamiento.'
  },
  {
    area: 'Infraestructura',
    title: 'Redes y telecomunicaciones',
    description: 'Comprender mejor cómo se comunican los sistemas y cómo influye la red en una solución tecnológica.'
  }
]
</script>

<style scoped>
.learning {
  padding: 2.4rem 2rem 2rem;
  max-width: 1300px;
  margin: 0 auto;
  color: #e6e6e6;
}

.section-heading {
  display: grid;
  gap: 0.35rem;
  margin-bottom: 1.5rem;
}

.section-heading span {
  color: #31d5ff;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0;
  color: #ffffff;
  font-size: 2rem;
  line-height: 1.15;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.1rem;
}

.learning-item {
  min-height: 180px;
  padding: 1.15rem;
  border: 1px solid rgba(49, 213, 255, 0.14);
  border-radius: 10px;
  background: rgba(10, 18, 26, 0.9);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
}

.learning-item span {
  color: #31d5ff;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.learning-item h3 {
  margin: 0.35rem 0 0.55rem;
  color: #ffffff;
  font-size: 1.12rem;
}

.learning-item p {
  margin: 0;
  color: #c7c7c7;
  line-height: 1.45;
  text-align: justify;
  text-wrap: pretty;
}

@media (max-width: 600px) {
  .learning {
    padding: 1.5rem 0.35rem;
  }

  .learning-item p {
    text-align: left;
  }
}
</style>
