<template>
  <div>
    <Services />
  </div>
</template>

<script setup>
// SEO for services page
useHead({
  title: 'Our Services - Oyffa Technologies',
  meta: [
    { name: 'description', content: 'Explore our comprehensive technology services including web development, mobile apps, cloud solutions, and digital transformation.' },
    { name: 'keywords', content: 'technology services, web development, mobile app development, cloud solutions, digital transformation, software consulting' },
    { property: 'og:title', content: 'Our Services - Oyffa Technologies' },
    { property: 'og:description', content: 'Comprehensive technology services for modern businesses' },
    { property: 'og:url', content: 'https://oyffa.com/services' }
  ]
})

// Structured data for services
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Technology Services',
  provider: {
    '@type': 'Organization',
    name: 'Oyffa Technologies'
  },
  description: 'Comprehensive technology solutions including web development, mobile apps, and digital transformation',
  url: 'https://oyffa.com/services'
})
</script>