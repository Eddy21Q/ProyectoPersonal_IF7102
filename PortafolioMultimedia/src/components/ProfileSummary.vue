<template>
  <section class="profile-summary" aria-labelledby="summary-title">
    <div class="summary-heading">
      <span>Enfoque profesional</span>
      <h2 id="summary-title">Tecnología con una mirada integral</h2>
    </div>

    <p>
      He participado en proyectos web con JavaScript, Vue, React, Laravel,
      ASP.NET Core y bases de datos. También me interesa el área de redes y
      telecomunicaciones, porque me gusta comprender cómo se conectan los
      sistemas más allá de la interfaz. Además, he trabajado con Java y C#,
      lo que me ha permitido acercarme tanto a la lógica de programación como
      al desarrollo de aplicaciones.
    </p>

    <p>
      Mi interés profesional no se limita a un solo lenguaje o área: busco
      crecer de forma integral en las distintas ramas de la informática que
      puedan fortalecer mi criterio técnico y mi desarrollo profesional.
    </p>

    <div class="summary-points" aria-label="Áreas de interés profesional">
      <span>Desarrollo web</span>
      <span>Bases de datos</span>
      <span>Redes</span>
      <span>Telecomunicaciones</span>
      <span>Aprendizaje continuo</span>
    </div>
  </section>
</template>

<style scoped>
.profile-summary {
  margin: 1rem 2rem 2.5rem;
  padding: 1.6rem 1.75rem;
  border: 1px solid rgba(49, 213, 255, 0.16);
  border-left: 3px solid #31d5ff;
  border-radius: 10px;
  background: rgba(10, 18, 26, 0.88);
  color: #e6e6e6;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
}

@media (max-width: 600px) {
  .profile-summary {
    margin: 1rem 1rem 2rem;
    padding: 1.25rem;
  }
}

.summary-heading {
  display: grid;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.summary-heading span {
  color: #31d5ff;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.summary-heading h2 {
  margin: 0;
  color: #ffffff;
  font-size: 1.7rem;
  line-height: 1.15;
}

.profile-summary p {
  max-width: 980px;
  margin: 0 0 0.9rem;
  color: #d2d2d2;
  line-height: 1.7;
  text-align: justify;
  text-wrap: pretty;
}

.summary-points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.2rem;
}

.summary-points span {
  padding: 0.42rem 0.7rem;
  border: 1px solid rgba(49, 213, 255, 0.34);
  border-radius: 999px;
  color: #d8effb;
  background: rgba(49, 213, 255, 0.08);
  font-size: 0.86rem;
  font-weight: 700;
}
</style>
