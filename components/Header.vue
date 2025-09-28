<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
          <img 
            src="https://i.imgur.com/YourLogoId.png" 
            alt="Oyffa Technologies Logo" 
            class="h-20 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about-us" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/about-us' }"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/services' }"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about-us" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/about-us' }"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/services' }"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2"
            :class="{ 'text-primary-600 font-semibold': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>