<template>
  <div>
    <About />
  </div>
</template>

<script setup>
// SEO for about page
useHead({
  title: 'About Us - Oyffa Technologies',
  meta: [
    { name: 'description', content: 'Learn about Oyffa Technologies, our mission, vision, and the expert team behind our innovative technology solutions.' },
    { name: 'keywords', content: 'about oyffa technologies, company mission, technology team, innovation, expertise' },
    { property: 'og:title', content: 'About Us - Oyffa Technologies' },
    { property: 'og:description', content: 'Learn about our mission, vision, and expert team' },
    { property: 'og:url', content: 'https://oyffa.com/about-us' }
  ]
})

// Structured data for about page
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Oyffa Technologies',
  description: 'Learn about our company, mission, and team',
  url: 'https://oyffa.com/about-us'
})
</script>