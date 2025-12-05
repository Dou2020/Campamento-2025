# 🚀 Stellar: Misión Espacial - CAMPA 2025

Landing page y sistema de gestión para el campamento Stellar: Misión Espacial 2025. Una aventura de fe más allá de las estrellas.

## ✨ Características

- 🎨 **Diseño Responsive**: Optimizado para laptop, tablet y móviles usando Tailwind CSS
- ⏰ **Cuenta Regresiva**: Timer en tiempo real hasta el inicio del campamento
- 📸 **Galería Interactiva**: Momentos memorables del campamento con efectos hover
- 👥 **Gestión de Participantes**: Visualización de tripulación integrada con Notion
- 🌌 **Tema Espacial**: Diseño inmersivo con gradientes, animaciones y efectos visuales
- 📝 **Formulario de Inscripción**: Integración directa con Google Forms
- 🏕️ **Información del Evento**: Fecha, lugar, costo y edades en tarjetas destacadas

## 🗓️ Información del Evento

- **Fecha**: 7 - 10 de Diciembre 2025
- **Lugar**: Campamento Ahuehuetl
- **Costo**: Q300.00 (todo incluido)
- **Edades**: 7 - 14 años

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

### Componentes Principales

- **FirstPage.astro**: Integra todas las secciones
- **HeroSection.astro**: Hero con título y CTA
- **CountdownSection.astro**: Sección de cuenta regresiva
- **Participante.astro**: Lista de participantes desde Notion

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm install`             | Instala las dependencias                            |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`   |
| `npm run build`           | Construye el sitio para producción en `./dist/`     |
| `npm run preview`         | Vista previa del build antes de desplegar           |
| `npx wrangler pages deploy dist` | Despliega a Cloudflare Pages             |

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env`:

```env
NOTION_API_KEY=tu_api_key_de_notion
NOTION_DATA_SOURCE_ID=tu_data_source_id
```

## 🎨 Secciones de la Landing Page

- **Hero**: Logo, título y botón de inscripción
- **Countdown**: Timer dinámico hasta el evento
- **Info**: Fecha, lugar, costo y edades
- **Activities**: 6 actividades del campamento
- **Gallery**: Imágenes con efectos hover
- **Crew**: Link a página de participantes
- **CTA**: Call-to-action final

## 👥 Página de Participantes

Ruta `/camperos` muestra:
- Lista de participantes desde Notion
- Avatar según género
- Grid responsive

## 🚀 Despliegue

```bash
npm run build
npx wrangler pages deploy dist
```

## 🛠️ Tecnologías

- Astro + TypeScript
- Tailwind CSS
- Notion API
- Cloudflare Pages

## 📝 Inscripción

[Formulario de Google Forms](https://forms.gle/e5Xi8hRgzik8xU8d6)

## 🌟 Créditos

© 2025 Stellar: Misión Espacial  
Desarrollado para Legión ICTHUS Libni

---

✨ **Una aventura de fe más allá de las estrellas** ✨
