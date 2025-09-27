export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Modules for enhanced functionality
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
  ],

  // SEO and Meta configuration
  app: {
    head: {
      title: 'Oyffa - AI, Automation & Custom Software Solutions | IIT Alumni Founded',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Research-driven product company specializing in AI, automation, mobile apps, and custom software. Founded by IIT alumni. Available for freelance and enterprise projects.' 
        },
        { 
          name: 'keywords', 
          content: 'AI automation, custom software development, mobile app development, artificial intelligence, machine learning, RPA, robotic process automation, web development, SaaS, quantum computing, IIT alumni, freelance developers, enterprise solutions, business automation' 
        },
        { name: 'author', content: 'Oyffa Technologies' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.oyffa.com/' },
        { property: 'og:title', content: 'Oyffa - AI, Automation & Custom Software Solutions' },
        { property: 'og:description', content: 'Research-driven product company specializing in AI, automation, and custom software solutions. Founded by IIT alumni.' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://www.oyffa.com/' },
        { property: 'twitter:title', content: 'Oyffa - AI, Automation & Custom Software Solutions' },
        { property: 'twitter:description', content: 'Research-driven product company specializing in AI, automation, and custom software solutions. Founded by IIT alumni.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/WhatsApp_Image_2025-09-22_at_23.05.33-removebg-preview.png' }
      ]
    }
  },

  // Google Fonts configuration
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap',
    preload: true
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // Build optimizations
  build: {
    transpile: []
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.oyffa.com',
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || 'hello@oyffa.com',
      contactPhone: process.env.NUXT_PUBLIC_CONTACT_PHONE || '+91 8607629309'
    }
  },

  // Experimental features for better performance
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  }
})