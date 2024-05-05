// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-chatgpt"],

  chatgpt: {
    apiKey: 'Your apiKey here goes here'
  },
})