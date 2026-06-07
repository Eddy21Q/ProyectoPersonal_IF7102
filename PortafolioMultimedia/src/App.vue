<template>
  <div class="app">
    <Header />

    <main class="content">
      <About />
      <ProfileSummary />
      <Gallery />
      <Skills />
      <Learning />
    </main>

    <ContactFooter />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import About from './components/About.vue'
import ProfileSummary from './components/ProfileSummary.vue'
import Gallery from './components/Gallery.vue'
import Skills from './components/Skills.vue'
import Learning from './components/Learning.vue'
import ContactFooter from './components/ContactFooter.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 92px;
}

body {
  background: #050a10;
}

::selection {
  color: #071014;
  background: #8bbfda;
}

.app {
  background:
    radial-gradient(circle at 22% 8%, rgba(49, 213, 255, 0.08), transparent 26%),
    radial-gradient(circle at 78% 20%, rgba(49, 213, 255, 0.08), transparent 30%),
    linear-gradient(180deg, #050a10 0%, #081019 44%, #050a10 100%);
  min-height: 100vh;
  color: #e6e6e6;
  font-family: 'Inter', sans-serif;
}

.content {
  max-width: 1300px;   
  margin: 0 auto;
  padding: 1.4rem 3rem 4rem;
}

.content > section + section {
  margin-top: 1.5rem;
}

@media (max-width: 1100px) {
  .content {
    max-width: 1000px;
    padding: 3rem 2rem;
  }
}

@media (max-width: 900px) {
  .content {
    max-width: 800px;
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 600px) {
  .content {
    max-width: 100%;
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 420px) {
  .content {
    padding: 1rem 0.8rem;
  }
}
</style>
