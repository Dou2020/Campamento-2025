// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: cloudflare({
    //imageService: 'cloudflare',
    // Esto le dice a Astro que use la configuración de la plataforma
    platformProxy: {
      enabled: true,
    },
  }),
  // IMPORTANTE: Configuración de Imágenes
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    // Si usas el servicio de Cloudflare, Astro necesita saber qué dominios remotos están permitidos
    domains: [
      'prod-files-secure.s3.us-west-2.amazonaws.com', // <-- Dominio de imágenes de Notion
      's3.us-west-2.amazonaws.com', // <-- A veces usan este también
    ],
    /* Opcional: Si quieres ser más permisivo con los patrones:
     remotePatterns: [{ protocol: 'https' }],
    */
  }
});