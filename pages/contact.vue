<template>
  <div>
    <Contact />
  </div>
</template>

<script setup>
// SEO for contact page
useHead({
  title: 'Contact Us - Oyffa Technologies',
  meta: [
    { name: 'description', content: 'Get in touch with Oyffa Technologies. Contact us for technology solutions, project inquiries, and business partnerships.' },
    { name: 'keywords', content: 'contact oyffa technologies, get in touch, project inquiry, business partnership, technology consultation' },
    { property: 'og:title', content: 'Contact Us - Oyffa Technologies' },
    { property: 'og:description', content: 'Get in touch for technology solutions and partnerships' },
    { property: 'og:url', content: 'https://oyffa.com/contact' }
  ]
})

// Structured data for contact page
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Oyffa Technologies',
  description: 'Get in touch with our team for technology solutions',
  url: 'https://oyffa.com/contact'
})
</script>