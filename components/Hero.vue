<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden pt-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      <div class="absolute bottom-32 right-16 w-24 h-24 bg-purple-100 rounded-full opacity-40 animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute top-64 right-32 w-16 h-16 bg-teal-100 rounded-full opacity-60 animate-pulse" style="animation-delay: 4s"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <!-- Main Heading -->
      <div class="space-y-8 mb-12">
        <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
          Transforming Ideas into{' '}
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Intelligent Solutions
          </span>
        </h1>
        
        <p class="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Research-driven product company specializing in Artificial Intelligence, Automation, 
          and Custom Software Solutions. Powered by expert IIT alumni engineers delivering 
          scalable, AI-first solutions for businesses worldwide.
        </p>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap justify-center gap-4 mb-12 px-4">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          class="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span class="text-lg mr-2">{{ tag.icon }}</span>
          <span class="text-gray-700 font-medium text-sm md:text-base">{{ tag.text }}</span>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-6 px-4">
        <NuxtLink
          to="/services"
          class="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 min-w-[220px]"
        >
          Explore Our Services
          <Icon name="heroicons:arrow-right" class="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </NuxtLink>
        
        <NuxtLink
          to="/contact"
          class="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-blue-600 hover:text-white flex items-center justify-center gap-3 min-w-[220px]"
        >
          <Icon name="heroicons:star" class="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
          Start Your Project
        </NuxtLink>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
        <div v-for="(stat, index) in stats" :key="index" class="text-center">
          <div class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{{ stat.number }}</div>
          <div class="text-gray-600 font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tags = [
  { icon: '🎓', text: 'IIT Alumni Founded' },
  { icon: '🔬', text: 'Research-Focused' },
  { icon: '🤖', text: 'AI-First Approach' },
  { icon: '🌐', text: 'Global Delivery' }
]

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '25+', label: 'Happy Clients' },
  { number: '99%', label: 'Success Rate' }
]
</script>