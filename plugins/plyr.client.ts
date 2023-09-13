import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr'
const VuePlayer = VuePlyr;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuePlayer, { plyr: {} });
});