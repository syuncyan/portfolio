const title_name = ポートフォリオサイト
const desc_name = 自己紹介などいろいろ書いてますぜひ見てね
const img_url = assets/portfolio_picture.jpg
export default {
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { hid: 'description', name: 'description', content: desc_name },
      { hid: 'og:title', property: 'og:title', content: title_name },
      { hid: 'og:image', property: 'og:image', content: img_url },
      { hid: 'og:description', property: 'og:description', content: desc_name },

      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link:[{ rel: "icon", type: "image/x-icon", href: "/boy_soccer.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
