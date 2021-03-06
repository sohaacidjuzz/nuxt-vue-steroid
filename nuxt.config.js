export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-first-nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'}
    ]
  },

  router: {
    linkExactActiveClass: 'my-custom-exact-active-link',

    extendRoutes(routes, resolve) {
      routes.push({
        path: "*",
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css'
  ],
/** Customizing progress bar */
loadingIndicator: {
  name: 'circle',
  color: '#fa923f',

},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-js-66865-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyAxA3R7bRdHkQsJajLaplZT6W0MNjBbN9M'
  }
}
