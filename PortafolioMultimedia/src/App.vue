<template>
  <div class="app">
    <Header />

    <main class="content">
      <About />
      <Gallery />
      <Skills />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Skills from './components/Skills.vue'
</script>

<style>
/* ======== ESTILO GLOBAL DARK UI ======== */
.app {
  background: #0d0d0d;
  min-height: 100vh;
  color: #e6e6e6;
  font-family: 'Inter', sans-serif;
}

/* ======== AJUSTE PARA PC ======== */
.content {
  max-width: 1300px;   /* MÁS ANCHO PARA PC */
  margin: 0 auto;
  padding: 4rem 3rem;  /* MÁS ESPACIO EN ESCRITORIO */
}

/* ======== RESPONSIVE ======== */

/* Laptops pequeñas */
@media (max-width: 1100px) {
  .content {
    max-width: 1000px;
    padding: 3rem 2rem;
  }
}

/* Tablets */
@media (max-width: 900px) {
  .content {
    max-width: 800px;
    padding: 2rem 1.5rem;
  }
}

/* Móviles grandes */
@media (max-width: 600px) {
  .content {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
}

/* Móviles pequeños */
@media (max-width: 420px) {
  .content {
    padding: 1rem 0.8rem;
  }
}
</style>
