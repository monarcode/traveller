// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASEURL || 'http://api-dev.anchor.tiqwa.com/api',
    },
  },
  css: ['~/assets/scss/main.scss', '~/assets/font/font.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    origin: 'https://test-tiqwa.vercel.app',
  },
})
