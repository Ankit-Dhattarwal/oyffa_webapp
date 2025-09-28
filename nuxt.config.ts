export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Oyffa Technologies - Leading Technology Solutions',
      meta: [
        { name: 'description', content: 'Oyffa Technologies provides cutting-edge technology solutions, web development, mobile apps, and digital transformation services.' },
        { name: 'keywords', content: 'technology, web development, mobile apps, digital solutions, software development' },
        { name: 'author', content: 'Oyffa Technologies' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Oyffa Technologies - Leading Technology Solutions' },
        { property: 'og:description', content: 'Cutting-edge technology solutions for modern businesses' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  ssr: true
})