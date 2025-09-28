<template>
  <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
    <div class="container-custom">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to 
          <span class="text-primary-600">Oyffa Technologies</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          We create innovative technology solutions that transform businesses and drive digital success. 
          From web development to mobile apps, we're your trusted technology partner.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/services" class="btn-primary">
            Explore Our Services
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>