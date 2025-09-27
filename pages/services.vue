<template>
  <div class="pt-20">
    <Services />
  </div>
</template>

<script setup>
// SEO for services page
useHead({
  title: 'Our Services - AI, Automation & Custom Software Development | Oyffa',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive technology services including AI & ML, automation solutions, mobile app development, web development, quantum computing research, and low-code solutions.'
    }
  ]
})

// Structured data for services
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI and Automation Services',
  provider: {
    '@type': 'Organization',
    name: 'Oyffa Technologies'
  },
  serviceType: [
    'Artificial Intelligence',
    'Automation Solutions',
    'Mobile App Development',
    'Web Development',
    'Quantum Computing',
    'Low-Code Solutions'
  ],
  description: 'Comprehensive technology solutions designed to accelerate digital transformation and drive business growth through intelligent automation.'
})
</script>