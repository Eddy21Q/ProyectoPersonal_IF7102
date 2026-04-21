<template>
  <section id="about" class="about">
    <div class="content">
      <img class="photo" src="/src/assets/images/profile.jpg" alt="Foto personal" />

      <div class="info">
        <h2>Sobre mí</h2>
        <p>Aquí irá tu descripción personal cargada desde JSON.</p>

        <audio controls>
          <source src="/src/assets/audio/presentacion.mp3" type="audio/mpeg" />
        </audio>

        <video controls width="300">
          <source src="/src/assets/video/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 2rem;
}
.content {
  display: flex;
  gap: 2rem;
}
.photo {
  width: 200px;
  border-radius: 10px;
}
</style>
