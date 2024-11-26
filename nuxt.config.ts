// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'dayjs-nuxt',
    'nuxt-svgo',
    '@use-wagmi/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxtjs/color-mode'
  ],
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 600, 900],
      Vazirmatn: [400],
      Sora: [600, 700],
      Inter: [600, 700, 900],
      Roboto: [400],
    },
  },
  css: ['~/assets/css/main.css'],
  ui: {
    global: true,
  },
  svgo: {
    autoImportPath: './assets/icons',
    componentPrefix: 'Icon',
  },
  imports: {
    autoImport: true,
  },
  components: [
    { path: '~/components/charts', pathPrefix: false },
    { path: '~/components/pages', prefix: '' },
    '~/components',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'NFT Market',
      meta: [
        {
          charset: 'utf-8',
        },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          hid: 'apple-mobile-web-app-status-bar-style',
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        { name: 'apple-mobile-web-app-title', content: 'NFT' },
        {
          hid: 'description',
          content: 'NFT',
        },
      ],
    },
  },
})
