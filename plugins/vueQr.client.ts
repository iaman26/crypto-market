import vueQr from 'vue-qr/src/packages/vue-qr.vue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueQr', vueQr)
})
