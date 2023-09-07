// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_READ_TOKEN: process.env.API_READ_TOKEN
    },
  },
  app: {
    head: {
      title: "Al Baseer",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "Al Baseer",
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/webp',
          href: '/favicon.png'
        }
      ]
    }
  },
  ssr: false,
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/main.css'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  }
})