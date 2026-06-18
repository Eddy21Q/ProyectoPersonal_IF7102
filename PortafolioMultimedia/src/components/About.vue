<script setup>
import { ref, onMounted } from 'vue'
import { getPortfolioData } from '@/services/portfolioData'

const about = ref({})
const mediaStatus = ref({
  audio: false,
  video: false
})

const profileTags = ['Desarrollo web', 'Telecomunicaciones', 'Bases de datos', 'Sistemas web']

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
  const data = await getPortfolioData()
  about.value = data.about

  mediaStatus.value.audio = await resourceExists(about.value.audio)
  mediaStatus.value.video = await resourceExists(about.value.video)
})
</script>

<template>
  <section id="about" class="about" v-if="about.photo">
    <div class="profile-hero">
      <div class="hero-copy">
        <span class="eyebrow">Estudiante de informática</span>
        <h1>
          <span>Eddy Josué</span>
          <strong>González Quirós</strong>
        </h1>
        <p>{{ about.description }}</p>

        <div class="profile-tags" aria-label="Áreas de interés">
          <span v-for="tag in profileTags" :key="tag">{{ tag }}</span>
        </div>

        <div class="hero-actions">
          <a class="primary-action" href="#contact">Contactarme</a>
          <a class="secondary-action" href="https://github.com/Eddy21Q" target="_blank" rel="noopener">
            Ver GitHub
          </a>
        </div>
      </div>

      <figure class="portrait-panel">
        <img :src="about.photo" alt="Foto personal" />
        <span class="status-badge">Disponible</span>
        <figcaption>
          <span>Estudiante de informática</span>
          <strong>Costa Rica</strong>
        </figcaption>
      </figure>
    </div>

    <div class="social-strip" aria-label="Enlaces personales">
      <a href="https://github.com/Eddy21Q" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/josue-gonzalez-495673326" target="_blank" rel="noopener">
        LinkedIn
      </a>
      <a href="mailto:josue.72.gonza2023@gmail.com">Correo</a>
    </div>

    <div class="media-section">
      <div class="media-heading">
        <span>Audio y video</span>
        <strong></strong>
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

          <audio v-if="mediaStatus.audio" :src="about.audio" controls preload="metadata"></audio>
          <div v-else class="media-pending">
            Pendiente de agregar `presentacion.mp3`
          </div>
        </article>

        <article class="media-card video-card">
          <div class="media-copy">
            <span class="media-label">Video</span>
            <h3>Introducción personal</h3>
            <p>Video corto para complementar la presentación del portafolio.</p>
            <div v-if="!mediaStatus.video" class="media-pending">
              Pendiente de agregar el video de presentación
            </div>
          </div>

          <div class="media-preview">
            <video v-if="mediaStatus.video" controls>
              <source :src="about.video" type="video/mp4" />
            </video>
            <div v-else class="video-placeholder">
              <span class="play-symbol"></span>
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
  padding: 2.2rem 2rem 1.4rem;
  color: #e6e6e6;
  position: relative;
  background:
    radial-gradient(circle at 78% 22%, rgba(49, 213, 255, 0.13), transparent 34%),
    radial-gradient(circle at 16% 18%, rgba(49, 213, 255, 0.06), transparent 30%);
  border-radius: 18px;
}

.profile-hero,
.social-strip,
.media-section {
  position: relative;
  z-index: 1;
}

.profile-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.82fr);
  gap: 3rem;
  align-items: center;
  padding: 2.2rem 0 1.2rem;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.eyebrow {
  color: #31d5ff;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.hero-copy h1 {
  display: grid;
  gap: 0.1rem;
  margin: 0.65rem 0 1.1rem;
  color: #ffffff;
  font-size: 4rem;
  line-height: 0.96;
}

.hero-copy h1 span,
.hero-copy h1 strong {
  font-weight: 900;
}

.hero-copy h1 strong {
  color: #31d5ff;
  text-shadow: 0 0 28px rgba(49, 213, 255, 0.18);
}

.hero-copy p {
  max-width: 760px;
  margin: 0;
  color: #c6d0d8;
  font-size: 1rem;
  line-height: 1.75;
  text-align: justify;
  text-wrap: pretty;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.2rem;
}

.profile-tags span {
  padding: 0.48rem 0.75rem;
  border: 1px solid rgba(49, 213, 255, 0.32);
  border-radius: 999px;
  color: #d8f6ff;
  background: rgba(49, 213, 255, 0.08);
  font-size: 0.84rem;
  font-weight: 750;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.25rem;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.88rem;
  font-weight: 850;
  line-height: 1;
  text-decoration: none !important;
  transition: transform 0.25s ease,
              border-color 0.25s ease,
              background 0.25s ease;
}

.primary-action {
  color: #061118 !important;
  background: #31d5ff;
  box-shadow: 0 0 22px rgba(49, 213, 255, 0.32);
}

.secondary-action {
  border: 1px solid rgba(49, 213, 255, 0.32);
  color: #d8f6ff !important;
  background: rgba(49, 213, 255, 0.05);
}

.primary-action:hover,
.primary-action:focus-visible,
.secondary-action:hover,
.secondary-action:focus-visible {
  transform: translateY(-2px);
  outline: none;
}

.portrait-panel {
  display: grid;
  align-content: end;
  min-height: 430px;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(49, 213, 255, 0.55);
  border-radius: 14px;
  background: #08111a;
  box-shadow:
    0 0 0 1px rgba(49, 213, 255, 0.12),
    0 0 34px rgba(49, 213, 255, 0.18),
    0 24px 50px rgba(0, 0, 0, 0.42);
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
    rgba(0, 0, 0, 0.02),
    rgba(0, 0, 0, 0.8)
  );
}

.status-badge {
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  z-index: 1;
  padding: 0.35rem 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  color: #d8f6ff;
  background: rgba(8, 14, 20, 0.72);
  font-size: 0.76rem;
  font-weight: 800;
}

.status-badge::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 0.4rem;
  border-radius: 50%;
  background: #45f0a2;
  box-shadow: 0 0 10px rgba(69, 240, 162, 0.75);
}

.portrait-panel figcaption {
  display: grid;
  gap: 0.35rem;
  padding: 1rem 1.2rem;
  position: relative;
  z-index: 1;
  background: rgba(4, 9, 14, 0.72);
  backdrop-filter: blur(8px);
}

.portrait-panel figcaption span,
.portrait-panel figcaption strong {
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 780;
}

.portrait-panel figcaption strong {
  color: #bcd3df;
}

.social-strip {
  display: flex;
  justify-content: flex-end;
  gap: 0.7rem;
  margin: -0.15rem 0 1.5rem;
  padding-right: 8.5rem;
}

.social-strip a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.55rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #d9e8ef !important;
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1;
  text-decoration: none !important;
  transition: transform 0.25s ease,
              border-color 0.25s ease,
              background 0.25s ease;
}

.social-strip a:hover,
.social-strip a:focus-visible,
.social-strip a:visited {
  color: #d9e8ef !important;
  text-decoration: none !important;
}

.social-strip a:hover,
.social-strip a:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(49, 213, 255, 0.45);
  background: rgba(49, 213, 255, 0.1);
  outline: none;
}

.media-section {
  margin-top: 0.8rem;
}

.media-heading {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.media-heading span {
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 850;
}

.media-heading::before {
  content: "";
  width: 18px;
  height: 18px;
  background: repeating-linear-gradient(
    90deg,
    #31d5ff 0 3px,
    transparent 3px 6px
  );
}

.media-heading strong {
  flex: 0 0 34px;
  height: 2px;
  background: #31d5ff;
  box-shadow: 0 0 14px rgba(49, 213, 255, 0.65);
}

.media-grid {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(320px, 1fr);
  gap: 1.25rem;
}

.media-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  background: rgba(10, 18, 26, 0.88);
  border: 1px solid rgba(49, 213, 255, 0.18);
  border-radius: 10px;
  padding: 1.15rem;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.32);
}

.media-icon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 12px;
  background: rgba(49, 213, 255, 0.06);
  border: 1px solid rgba(49, 213, 255, 0.24);
}

.audio-icon span {
  width: 28px;
  height: 26px;
  background: repeating-linear-gradient(
    90deg,
    #31d5ff 0 4px,
    transparent 4px 8px
  );
  border-radius: 4px;
}

.media-copy {
  min-width: 0;
}

.media-label {
  color: #31d5ff;
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;
}

.media-copy h3 {
  margin: 0.2rem 0 0.35rem;
  color: #ffffff;
  font-size: 1.08rem;
}

.media-copy p {
  margin: 0;
  color: #aebfcb;
  line-height: 1.45;
}

.media-card audio {
  grid-column: 1 / -1;
  width: 100%;
  margin-top: 0.4rem;
}

.media-pending {
  grid-column: 1 / -1;
  margin-top: 0.4rem;
  padding: 0.7rem 0.85rem;
  border: 1px dashed rgba(49, 213, 255, 0.42);
  border-radius: 8px;
  color: #bcd3df;
  background: rgba(49, 213, 255, 0.06);
  font-size: 0.88rem;
}

.video-card {
  grid-template-columns: minmax(0, 0.85fr) minmax(220px, 1fr);
  align-items: center;
}

.media-preview {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border: 1px solid rgba(49, 213, 255, 0.38);
  border-radius: 10px;
  background:
    radial-gradient(circle at 18% 18%, rgba(49, 213, 255, 0.2), transparent 28%),
    linear-gradient(135deg, #031017 0%, #071722 48%, #02070c 100%);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 0 28px rgba(49, 213, 255, 0.16),
    0 18px 36px rgba(0, 0, 0, 0.38);
  position: relative;
}

.media-preview::after {
  content: "";
  position: absolute;
  inset: 0 0 42px;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(135deg, rgba(3, 16, 23, 0.3), transparent 46%),
    radial-gradient(circle at 82% 18%, rgba(49, 213, 255, 0.16), transparent 32%);
  mix-blend-mode: screen;
}

.media-preview video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.86) contrast(1.08) saturate(0.88);
  position: relative;
  z-index: 1;
}

.video-placeholder {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at center, rgba(49, 213, 255, 0.16), transparent 34%),
    repeating-linear-gradient(
      135deg,
      #0b1722 0 16px,
      #08111a 16px 32px
    );
}

.play-symbol {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  position: relative;
  box-shadow: 0 8px 26px rgba(49, 213, 255, 0.28);
}

.play-symbol::after {
  content: "";
  position: absolute;
  top: 18px;
  left: 23px;
  border-left: 18px solid #061018;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
}

@media (max-width: 960px) {
  .profile-hero {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 3.2rem;
  }

  .portrait-panel {
    min-height: 420px;
  }

  .social-strip {
    justify-content: flex-start;
    padding-right: 0;
  }

  .media-grid,
  .video-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 1.25rem 0.9rem;
    border-radius: 12px;
  }

  .profile-hero {
    gap: 1.4rem;
    padding-top: 0.45rem;
  }

  .hero-copy h1 {
    font-size: clamp(2.25rem, 12vw, 3.15rem);
    line-height: 0.98;
  }

  .hero-copy p {
    font-size: 0.98rem;
    line-height: 1.62;
    text-align: left;
  }

  .portrait-panel {
    min-height: 360px;
  }

  .profile-tags span {
    font-size: 0.78rem;
  }

  .hero-actions a {
    flex: 1 1 150px;
  }
}
</style>
