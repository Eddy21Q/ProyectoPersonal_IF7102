<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">Mi Portafolio</h1>

      <nav class="nav">
        <a href="#about">Sobre mí</a>
        <a href="#gallery">Galería</a>
        <a href="#skills">Habilidades</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* CONTENEDOR INTERNO CENTRADO */
.header-content {
  max-width: 1300px;      /* MISMO ANCHO QUE App.vue */
  margin: 0 auto;
  padding: 1.4rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.7rem;
  font-weight: 700;
  color: #ffffff;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.nav a {
  color: #cccccc;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.25s ease;
}

.nav a:hover {
  color: #ffffff;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: #ffffff;
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

/* RESPONSIVE */
@media (max-width: 700px) {
  .header-content {
    padding: 1rem 1.2rem;
    flex-direction: column;
    gap: 0.8rem;
  }

  .logo {
    font-size: 1.4rem;
    text-align: center;
  }

  .nav {
    justify-content: center;
    gap: 0.8rem 1.2rem;
  }

  .nav a {
    font-size: 0.95rem;
  }
}

@media (max-width: 420px) {
  .header-content {
    padding: 0.9rem 0.8rem;
  }

  .nav {
    width: 100%;
    gap: 0.7rem;
  }

  .nav a {
    font-size: 0.9rem;
  }
}
</style>
