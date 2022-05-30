export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Penduline",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
    },],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/custom.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~mixins/global"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~components", "~components/layout", "~components/icons"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    // https://www.npmjs.com/package/@nuxtjs/toast
    "@nuxtjs/toast",

    [
      "@nuxtjs/i18n",
      {
        defaultLocale: "en",
        langDir: "~/locales/",
        locales: [
          {
            code: "en",
            file: "en.js",
            name: "English",
            dir: "ltr",
          },
          {
            code: "ar",
            file: "ar.js",
            name: "Arabic",
            dir: "rtl",
          },
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // toast configuration
  toast: {
    position: "top-right",
    duration: 3000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
