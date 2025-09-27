<template>
  <div class="pt-20">
    <Contact />
  </div>
</template>

<script setup>
// SEO for contact page
useHead({
  title: 'Contact Us - Get Started with Your AI & Automation Project | Oyffa',
  meta: [
    {
      name: 'description',
      content: 'Ready to transform your business with AI and automation? Contact Oyffa Technologies for custom software solutions, mobile apps, and enterprise automation.'
    }
  ]
})

// Structured data for contact
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Oyffa Technologies',
  description: 'Get in touch with Oyffa Technologies for AI, automation, and custom software development services.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Oyffa Technologies',
    email: 'hello@oyffa.com',
    telephone: '+91-8607629309'
  }
})
</script>