<template>
  <header 
    :class="`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-lg border-b border-gray-100'
    }`"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-4 cursor-pointer group">
          <img 
            src="/WhatsApp_Image_2025-09-22_at_23.05.33-removebg-preview.png" 
            alt="Oyffa Technologies" 
            class="h-20 w-auto transform transition-all duration-300 group-hover:scale-105"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8 lg:space-x-12">
          <li v-for="item in navigationItems" :key="item.href">
            <NuxtLink
              :to="item.href"
              :class="`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group py-2 ${
                $route.path === item.href ? 'text-blue-600' : ''
              }`"
            >
              {{ item.label }}
              <span :class="`absolute bottom-0 left-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ${
                $route.path === item.href ? 'w-full' : 'w-0'
              }`"></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Icon :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
        <ul class="py-4 space-y-2">
          <li v-for="item in navigationItems" :key="item.href">
            <NuxtLink
              :to="item.href"
              @click="isMobileMenuOpen = false"
              :class="`block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 font-medium ${
                $route.path === item.href ? 'text-blue-600 bg-blue-50' : ''
              }`"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>