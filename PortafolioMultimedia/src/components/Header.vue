<template>
  <header class="header">
    <div class="header-content">
      <div class="brand" aria-label="Identidad del portafolio">
        <span class="brand-mark">EG</span>
        <span class="brand-copy">
          <strong>Eddy González</strong>
          <span>Portafolio personal</span>
        </span>
      </div>

      <nav class="nav" aria-label="Navegación principal">
        <a class="active" href="#about">Sobre mí</a>
        <a href="#gallery">Galería</a>
        <a href="#skills">Habilidades</a>
        <a href="#learning">Aprendiendo</a>
        <a href="#contact">Contacto</a>
      </nav>

      <div class="header-actions" aria-hidden="true">
        <span class="theme-dot"></span>
        <span class="menu-lines"></span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background: rgba(5, 10, 16, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(58, 204, 255, 0.18);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0.8rem 3rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
  min-width: 230px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(48, 203, 255, 0.72);
  border-radius: 9px;
  color: #31d5ff;
  background: linear-gradient(145deg, #07131c, #0e1d28);
  font-size: 0.95rem;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(48, 203, 255, 0.12);
}

.brand-copy {
  display: grid;
  gap: 0.1rem;
  line-height: 1.15;
}

.brand-copy strong {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 850;
}

.brand-copy span {
  color: #95a8b8;
  font-size: 0.8rem;
  font-weight: 650;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.65rem;
}

.nav a {
  color: #c5d1da;
  text-decoration: none;
  font-weight: 750;
  font-size: 0.86rem;
  position: relative;
  padding: 0.45rem 0;
  transition: color 0.25s ease;
}

.nav a:hover,
.nav a:focus-visible,
.nav a.active {
  color: #31d5ff;
  outline: none;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.82rem;
  height: 2px;
  background: #31d5ff;
  box-shadow: 0 0 12px rgba(49, 213, 255, 0.65);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}

.nav a:hover::after,
.nav a:focus-visible::after,
.nav a.active::after {
  transform: scaleX(1);
}

.header-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  min-width: 74px;
}

.theme-dot {
  width: 18px;
  height: 18px;
  border: 2px solid #9fb2c0;
  border-left-color: transparent;
  border-radius: 50%;
}

.menu-lines,
.menu-lines::before,
.menu-lines::after {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: #9fb2c0;
  content: "";
}

.menu-lines {
  position: relative;
}

.menu-lines::before {
  position: absolute;
  top: -6px;
}

.menu-lines::after {
  position: absolute;
  top: 6px;
}

@media (max-width: 900px) {
  .header-content {
    grid-template-columns: 1fr;
    gap: 0.9rem;
    padding: 1rem 1.2rem;
  }

  .nav {
    justify-content: flex-start;
    gap: 1rem;
  }

  .header-actions {
    display: none;
  }
}

@media (max-width: 520px) {
  .nav {
    gap: 0.85rem;
  }

  .nav a {
    font-size: 0.82rem;
  }
}
</style>
