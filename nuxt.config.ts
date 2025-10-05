import { definePerson } from 'nuxt-schema-org/schema'
import appMeta from './app/app.meta'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  site: {
    name: appMeta.name,
    url: appMeta.url,
    defaultLocale: 'en',
  },
  schemaOrg: {
    identity: definePerson(appMeta.author),
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 2,
        },
        remarkPlugins: {
          'remark-reading-time': {},
        },
      },
    },
  },
  modules: [
    '@nuxt/ui',
    'motion-v/nuxt',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  colorMode: {
    preference: 'dark', // default theme (if no preference in localStorage)
    fallback: 'dark', // fallback when system preference is unavailable
    classSuffix: '', // avoid "dark-mode" class; use plain "dark"
    storageKey: 'nuxt-blog-color-mode', // localStorage key (optional)
  },
})