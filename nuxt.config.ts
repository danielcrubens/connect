// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    subsets: 'latin',
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Montserrat: [400, 600],
      Oxanium: [ 500, 600],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['@/assets/css/main.css'],
  components: true,
})