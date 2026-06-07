<template>
  <footer id="contact" class="contact-footer">
    <section class="contact" aria-labelledby="contact-title">
      <div class="contact-copy">
        <span>Contacto</span>
        <h2 id="contact-title">Sigamos conectados</h2>
        <p>
          Estos son mis canales de contacto académico y profesional para
          compartir proyectos, consultas o nuevas oportunidades de aprendizaje.
        </p>
      </div>

      <div class="contact-links" aria-label="Canales de contacto">
        <a href="mailto:josue.72.gonza2023@gmail.com">
          Correo
        </a>
        <a href="https://github.com/Eddy21Q" target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/josue-gonzalez-495673326" target="_blank" rel="noopener">
          LinkedIn
        </a>
      </div>
    </section>

    <div class="footer-line">
      <span>Eddy Josué González Quirós</span>
      <span>Proyecto Personal IF7102 · 2026</span>
    </div>
  </footer>
</template>

<style scoped>
.contact-footer {
  margin-top: 2.5rem;
  border-top: 1px solid rgba(49, 213, 255, 0.16);
  background: rgba(4, 8, 13, 0.98);
  color: #e6e6e6;
}

.contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2.25rem 3rem;
}

.contact-copy span {
  color: #31d5ff;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.contact-copy h2 {
  margin: 0.35rem 0 0.6rem;
  color: #ffffff;
  font-size: 2rem;
  line-height: 1.15;
}

.contact-copy p {
  max-width: 680px;
  margin: 0;
  color: #c7c7c7;
  line-height: 1.55;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.7rem;
}

.contact-links a {
  min-width: 104px;
  padding: 0.68rem 0.9rem;
  border: 1px solid rgba(49, 213, 255, 0.34);
  border-radius: 8px;
  color: #d8effb;
  background: rgba(49, 213, 255, 0.08);
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.25s ease,
              background 0.25s ease,
              transform 0.25s ease;
}

.contact-links a:hover,
.contact-links a:focus-visible {
  transform: translateY(-2px);
  border-color: #31d5ff;
  background: rgba(49, 213, 255, 0.16);
  outline: none;
}

.footer-line {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 3rem 1.4rem;
  color: #8f9aa3;
  font-size: 0.9rem;
}

@media (max-width: 800px) {
  .contact {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
  }

  .contact-links {
    justify-content: flex-start;
  }

  .footer-line {
    flex-direction: column;
    padding: 1rem 1.5rem 1.4rem;
  }
}
</style>
