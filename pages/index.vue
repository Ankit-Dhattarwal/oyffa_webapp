<template>
  <div>
    <Hero />
    <About />
    <Services />
    <Contact />
  </div>
</template>

<script setup>
// SEO for home page
useHead({
  title: 'Oyffa Technologies - Leading Technology Solutions',
  meta: [
    { name: 'description', content: 'Oyffa Technologies provides cutting-edge technology solutions, web development, mobile apps, and digital transformation services for modern businesses.' },
    { name: 'keywords', content: 'oyffa technologies, web development, mobile apps, software development, digital solutions, technology consulting' },
    { property: 'og:title', content: 'Oyffa Technologies - Leading Technology Solutions' },
    { property: 'og:description', content: 'Cutting-edge technology solutions for modern businesses' },
    { property: 'og:url', content: 'https://oyffa.com' }
  ]
})

// Structured data for SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oyffa Technologies',
  description: 'Leading technology solutions provider',
  url: 'https://oyffa.com',
  logo: 'https://oyffa.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-8900',
    contactType: 'customer service'
  }
})
</script>