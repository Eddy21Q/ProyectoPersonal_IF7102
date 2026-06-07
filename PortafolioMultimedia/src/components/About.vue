<script setup>
import { ref, onMounted } from 'vue'

const about = ref({})
const mediaStatus = ref({
  audio: false,
  video: false
})

const profileTags = ['Desarrollo web', 'IA', 'Telecomunicaciones', 'Bases de datos']

const resourceExists = async (url) => {
  if (!url) return false

  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

onMounted(async () => {
  const response = await fetch('/data/data.json')
  const data = await response.json()
  about.value = data.about

  mediaStatus.value.audio = await resourceExists(about.value.audio)
  mediaStatus.value.video = await resourceExists(about.value.video)
})
</script>

<template>
  <section id="about" class="about" v-if="about.photo">
    <div class="profile-hero">
      <div class="hero-copy">
        <span class="eyebrow">Portafolio personal</span>
        <h2>{{ about.name }}</h2>
        <p>{{ about.description }}</p>

        <div class="profile-tags" aria-label="Áreas de interés">
          <span v-for="tag in profileTags" :key="tag">{{ tag }}</span>
        </div>
      </div>

      <figure class="portrait-panel">
        <img :src="about.photo" alt="Foto personal" />
        <figcaption>
          <span>Perfil</span>
          <strong>Estudiante de informática</strong>
        </figcaption>
      </figure>
    </div>

    <div class="media-section">
      <div class="media-heading">
        <span>Multimedia personal</span>
        <strong>Audio y video</strong>
      </div>

      <div class="media-grid">
        <article class="media-card">
          <div class="media-icon audio-icon">
            <span></span>
          </div>
          <div class="media-copy">
            <span class="media-label">Audio</span>
            <h3>Autopresentación</h3>
            <p>Grabación personal para presentar mi perfil, intereses y objetivos.</p>
          </div>

          <audio v-if="mediaStatus.audio" controls>
            <source :src="about.audio" type="audio/mpeg" />
          </audio>
          <div v-else class="media-pending">
            Pendiente de agregar `presentacion.mp3`
          </div>
        </article>

        <article class="media-card video-card">
          <div class="media-preview">
            <video v-if="mediaStatus.video" controls>
              <source :src="about.video" type="video/mp4" />
            </video>
            <div v-else class="video-placeholder">
              <span class="play-symbol"></span>
            </div>
          </div>

          <div class="media-copy">
            <span class="media-label">Video</span>
            <h3>Introducción personal</h3>
            <p>Video corto para complementar la presentacion del portafolio.</p>
            <div v-if="!mediaStatus.video" class="media-pending">
              Pendiente de agregar `intro.mp4`
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;
  color: #e6e6e6;
}

.profile-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.75fr);
  gap: 2rem;
  align-items: stretch;
  padding: 1.2rem 0 2.4rem;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.eyebrow {
  color: #8bbfda;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero-copy h2 {
  margin: 0.55rem 0 1rem;
  color: #ffffff;
  font-size: 4.1rem;
  line-height: 1;
}

.hero-copy p {
  max-width: 830px;
  margin: 0;
  color: #d6d6d6;
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: justify;
  text-wrap: pretty;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.4rem;
}

.profile-tags span {
  padding: 0.42rem 0.7rem;
  border: 1px solid rgba(111, 180, 216, 0.38);
  border-radius: 999px;
  color: #d8effb;
  background: rgba(111, 180, 216, 0.1);
  font-size: 0.86rem;
  font-weight: 700;
}

.portrait-panel {
  display: grid;
  align-content: end;
  min-height: 390px;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: #151515;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.46);
  position: relative;
}

.portrait-panel img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portrait-panel::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.04),
    rgba(0, 0, 0, 0.72)
  );
}

.portrait-panel figcaption {
  display: grid;
  gap: 0.25rem;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

.portrait-panel figcaption span {
  color: #8bbfda;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.portrait-panel figcaption strong {
  color: #ffffff;
  font-size: 1.05rem;
}

.media-section {
  margin-top: 0.6rem;
}

.media-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 0.8rem;
}

.media-heading span {
  color: #8bbfda;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.media-heading strong {
  color: #ffffff;
  font-size: 1.35rem;
}

.media-grid {
  display: grid;
  grid-template-columns: minmax(240px, 0.9fr) minmax(300px, 1.1fr);
  gap: 1rem;
}

.media-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  background: #171717;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 1.1rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
}

.media-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0f0f0f;
  border: 1px solid rgba(111, 180, 216, 0.35);
}

.audio-icon span {
  width: 24px;
  height: 22px;
  background: repeating-linear-gradient(
    90deg,
    #8bbfda 0 3px,
    transparent 3px 6px
  );
  border-radius: 4px;
}

.media-copy {
  min-width: 0;
}

.media-label {
  color: #8bbfda;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.media-copy h3 {
  margin: 0.25rem 0 0.4rem;
  color: #ffffff;
  font-size: 1.1rem;
}

.media-copy p {
  margin: 0;
  color: #c7c7c7;
  line-height: 1.45;
}

.media-card audio {
  grid-column: 1 / -1;
  width: 100%;
  margin-top: 0.3rem;
}

.media-pending {
  grid-column: 1 / -1;
  margin-top: 0.3rem;
  padding: 0.75rem 0.85rem;
  border: 1px dashed rgba(139, 191, 218, 0.45);
  border-radius: 8px;
  color: #b9c7d4;
  background: rgba(111, 180, 216, 0.08);
  font-size: 0.9rem;
}

.video-card {
  grid-template-columns: 1fr;
}

.media-preview {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  background: #0d0d0d;
}

.media-preview video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-placeholder {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.35)),
    repeating-linear-gradient(
      90deg,
      #242424 0 18px,
      #1a1a1a 18px 36px
    );
}

.play-symbol {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #ffffff;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.play-symbol::after {
  content: "";
  position: absolute;
  top: 20px;
  left: 25px;
  border-left: 18px solid #111111;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
}

@media (max-width: 900px) {
  .profile-hero {
    grid-template-columns: 1fr;
  }

  .hero-copy h2 {
    font-size: 3.1rem;
  }

  .portrait-panel {
    min-height: 320px;
  }

  .media-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 1.5rem 1rem;
  }

  .profile-hero {
    gap: 1.2rem;
    padding-top: 0.5rem;
  }

  .hero-copy h2 {
    font-size: 2.3rem;
  }

  .hero-copy p {
    font-size: 1rem;
  }

  .portrait-panel {
    min-height: 360px;
  }

  .media-heading {
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
  }
}
</style>
