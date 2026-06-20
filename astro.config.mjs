// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

const {
  PUBLIC_SANITY_PROJECT_ID = 'placeholder-project-id',
  PUBLIC_SANITY_DATASET = 'production',
  PUBLIC_SANITY_API_VERSION = '2024-01-01',
} = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: 'https://texashouse.org',
  output: 'static',
  adapter: vercel(),
  integrations: [
    // Embeds the Sanity Studio at /studio using sanity.config.ts.
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
