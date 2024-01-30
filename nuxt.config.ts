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
    'nuxt-vuefire'
  ],
  vuefire: {
    config: {
      apiKey: 'AIzaSyB1ZbX6fN-iF5FaWe9PeWVuDIxf3CFKJf4',
      authDomain: "illuminara-6fd81.firebaseapp.com",
      projectId: "illuminara-6fd81",
      storageBucket: "illuminara-6fd81.appspot.com",
      messagingSenderId: "495860759987",
      appId: "1:495860759987:web:117215c13a3f7870891fc6",
      measurementId: "G-68ZR956R8C"
      // there could be other properties depending on the project
    },
    // ensures the auth module is enabled
    auth: {
      enabled: true
    },
  },
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
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    exclude: [],
  },
  cookieOptions: {
    maxAge: 60 * 60 * 8,
    sameSite: 'lax',
    secure: true
  },
  clientOptions: {
    auth: {
      flowType: 'pkce',
      detectSessionInUrl: false,
      persistSession: true,
      autoRefreshToken: true
    },
  }
})
