<template>
  <header class="header">
    <div class="header-content">
      <div class="brand" aria-label="Identidad del portafolio">
        <span class="brand-mark">EG</span>
        <span class="brand-copy">
          <strong>Eddy González</strong>
          <span>Portafolio multimedia</span>
        </span>
      </div>

      <nav class="nav" aria-label="Navegación principal">
        <a href="#about">Sobre mí</a>
        <a href="#gallery">Galería</a>
        <a href="#skills">Habilidades</a>
        <a href="#learning">Aprendiendo</a>
        <a href="#contact">Contacto</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background: rgba(8, 8, 8, 0.86);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0.85rem 3rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  color: #ffffff;
  min-width: 240px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(111, 180, 216, 0.6);
  border-radius: 8px;
  color: #8bbfda;
  background: #111111;
  font-size: 0.9rem;
  font-weight: 900;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.brand-copy {
  display: grid;
  gap: 0.1rem;
  line-height: 1.2;
}

.brand-copy strong {
  font-size: 1.05rem;
  font-weight: 800;
}

.brand-copy span {
  color: #aeb8c2;
  font-size: 0.82rem;
  font-weight: 600;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.nav a {
  color: #cccccc;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.25s ease;
}

.nav a:hover,
.nav a:focus-visible {
  color: #ffffff;
  outline: none;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #8bbfda;
  transition: width 0.3s ease;
}

.nav a:hover::after,
.nav a:focus-visible::after {
  width: 100%;
}

@media (max-width: 700px) {
  .header-content {
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem 1.2rem;
  }

  .nav {
    width: 100%;
    justify-content: space-between;
    gap: 0.7rem;
  }
}

@media (max-width: 420px) {
  .header-content {
    padding: 0.9rem 0.8rem;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
  }

  .nav a {
    font-size: 0.9rem;
  }
}
</style>
