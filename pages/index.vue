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
  title: 'Oyffa - AI, Automation & Custom Software Solutions | IIT Alumni Founded',
  meta: [
    {
      name: 'description',
      content: 'Research-driven product company specializing in AI, automation, mobile apps, and custom software. Founded by IIT alumni engineers delivering scalable solutions worldwide.'
    }
  ]
})

// Structured data for SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oyffa Technologies',
  url: 'https://www.oyffa.com',
  logo: 'https://www.oyffa.com/WhatsApp_Image_2025-09-22_at_23.05.33-removebg-preview.png',
  description: 'Research-driven product company specializing in AI, automation, and custom software solutions. Founded by IIT alumni.',
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'IIT Alumni Team'
    }
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8607629309',
    contactType: 'customer service',
    email: 'hello@oyffa.com'
  },
  sameAs: [
    'https://www.oyffa.com'
  ]
})
</script>