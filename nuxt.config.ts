// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'myblog',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      //script: [{ src: '/js/jquery-3.3.1.min.js' }, { src: '/js/slick/slick.min.js' }],
    }
  },
  css: [
    "@/assets/css/reset.css",
    "bootstrap/dist/css/bootstrap.min.css"
  ],
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/foundation/_base.scss";',
        },
      },
    },
  },
})
