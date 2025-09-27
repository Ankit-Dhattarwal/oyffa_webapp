<template>
  <section id="about" class="py-20 lg:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          About{' '}
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Oyffa
          </span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Founded by IIT alumni with a mission to democratize artificial intelligence and 
          automation through accessible, scalable solutions that transform business operations.
        </p>
      </div>

      <!-- About Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div
          v-for="(card, index) in aboutCards"
          :key="index"
          class="group bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
        >
          <!-- Icon -->
          <div class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
            <Icon :name="card.icon" class="h-8 w-8 lg:h-10 lg:w-10 text-white" />
          </div>

          <!-- Content -->
          <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
            {{ card.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-base lg:text-lg">
            {{ card.description }}
          </p>

          <!-- Hover Effect Line -->
          <div class="w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 mt-6 lg:mt-8 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aboutCards = [
  {
    icon: 'heroicons:target',
    title: 'Our Mission',
    description: 'To democratize artificial intelligence and automation by creating accessible, scalable, and intelligent solutions that transform how businesses operate and innovate in the digital age.'
  },
  {
    icon: 'heroicons:eye',
    title: 'Our Vision',
    description: 'To be the leading research-driven technology partner for businesses seeking to leverage AI, automation, and custom software solutions for sustainable growth and competitive advantage.'
  },
  {
    icon: 'heroicons:cog-6-tooth',
    title: 'Our Approach',
    description: 'Research-first methodology with automation-centric design, delivering custom-focused solutions through quality-driven development and globally accessible services.'
  }
]
</script>