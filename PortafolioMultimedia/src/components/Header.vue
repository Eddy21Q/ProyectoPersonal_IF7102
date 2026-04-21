<template>
  <header class="header">
    <h1 class="logo">Mi Portafolio</h1>

    <nav class="nav">
      <a href="#about">Sobre mí</a>
      <a href="#gallery">Galería</a>
      <a href="#skills">Habilidades</a>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #111;
  color: white;
  position: sticky;
  top: 0;
}
.nav a {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
}
</style>
