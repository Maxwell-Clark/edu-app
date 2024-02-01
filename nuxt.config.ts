// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  css: [
    '@/assets/css/maz-ui-variables.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@morev/vue-transitions/nuxt',
    'maz-ui/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/ui'
  ],
  vueTransitions: {

  },
  mazUi: {
    injectComponents: true,
    injectCss: true,
    injectAos: {
      injectCss: true,
    },
    injectUseToast: true,
    injectUseThemeHandler: true,
    devtools: true,
  },
  supabase: {
    redirect: false
  },
  // redirectOptions: {
  //   login: '/login',
  //   callback: '/confirm',
  //   exclude: ['http://localhost:3000/*'],
  // },
  // cookieOptions: {
  //   maxAge: 60 * 60 * 8,
  //   sameSite: 'lax',
  //   secure: true
  // },
  // clientOptions: {
  //   auth: {
  //     flowType: 'pkce',
  //     detectSessionInUrl: false,
  //     persistSession: true,
  //     autoRefreshToken: true
  //   },
  // }
})
