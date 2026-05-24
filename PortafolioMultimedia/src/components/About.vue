<script setup>
import { ref, onMounted } from 'vue'

const about = ref({})

onMounted(async () => {
  const response = await fetch('/data/data.json')
  const data = await response.json()
  about.value = data.about
})
</script>

<template>
  <section id="about" class="about" v-if="about.photo">
    <div class="content">
      <img class="photo" :src="about.photo" alt="Foto personal" />

      <div class="info">
        <h2>{{ about.name }}</h2>
        <p>{{ about.description }}</p>

        <audio controls>
          <source :src="about.audio" type="audio/mpeg" />
        </audio>

        <video controls class="video">
          <source :src="about.video" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 2rem;
  max-width: 1300px;   /* ANCHO REAL PARA PC */
  margin: 0 auto;
  color: #e6e6e6;
}

/* Layout interno */
.content {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

/* Foto */
.photo {
  width: 220px;          /* MÁS GRANDE PARA PC */
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 14px rgba(0,0,0,0.6);
}

/* Texto */
.info {
  flex: 1;
  min-width: 300px;
}

.info h2 {
  margin-bottom: 0.8rem;
  font-size: 1.8rem;
}

.info p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #cccccc;
  max-width: 800px;      /* MEJOR LECTURA EN PC */
}

/* Video */
.video {
  width: 100%;
  max-width: 450px;      /* MÁS ANCHO PARA PC */
  border-radius: 10px;
  margin-top: 1rem;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 900px) {
  .photo {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 600px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info p {
    max-width: 100%;
  }
}
</style>
