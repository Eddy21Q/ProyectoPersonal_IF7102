# PortafolioMultimedia

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
//--------------------------------------------------------------------------------------------------------


# Proyecto Personal IF7102 – 2026  

Aplicación web multimedia desarrollada con **Vue 3** como parte del curso IF7102 – Multimedios (UCR).  
En este proyecto se aplican conceptos vistos en clase como el uso de componentes reutilizables, la carga dinámica de información desde archivos JSON y la integración de contenido multimedia propio, cumpliendo con los requisitos del curso.

---

## Framework utilizado  
Vue 3 (Composition API + Vite)

---

## Opción seleccionada  
**Opción 1 – Portfolio Multimedia Personal**

El proyecto consiste en la creación de un portafolio personal que incluye:

- Presentación con fotografía propia  
- Audio de autopresentación grabado por el estudiante  
- Video introductorio  
- Galería de trabajos realizados  
- Sección de habilidades con animaciones  
- Datos cargados dinámicamente desde un archivo JSON  

---

## Estructura del proyecto  
src/
├─ assets/
├─ components/
│ └─ MiPrimerComponente.vue
├─ data/
│ └─ data.json
├─ App.vue
└─ main.js
---

## Instrucciones de ejecución  

Para ejecutar el proyecto de forma local:

1. Clonar el repositorio  

git clone https://github.com/Eddy21Q/ProyectoPersonal_IF7102.git
2. Ingresar a la carpeta del proyecto  

cd ProyectoPersonal_IF7102


3. Instalar las dependencias  

npm install


4. Ejecutar el servidor de desarrollo  

npm run dev


5. Abrir en el navegador  

http://localhost:5173/


---

## Archivo de referencias  

El archivo **REFERENCIAS.md** incluye:

- Documentación consultada durante el desarrollo  
- Recursos utilizados para aprender Vue 3    
- Herramientas utilizadas como apoyo durante el proceso  

##  cOMPONENTES DEL PROYECTO
-Header.vue:

Inicio | Sobre mí | Galería | Habilidades

-About.vue:

Foto de mi persona 

Audio de autopresentación 

Texto de presentación

Video corto 

-Gallery.vue:

Se muestran mis trabajos o proyectos

-Skills.vue
Se muestran mis habilidades con animaciones

-En lo que respecta a componentes reutilizables planeo utilizar skillCard.vue que recibe una habilidad por props: defineProps(['skill']).
-Otro componente a tomar en cuenta es ProjectCard.vue que recibe un proyecto defineProps (['project']). a lo largo del desarrollo del proyecto es posible que se usen mas componentes reutilizables.