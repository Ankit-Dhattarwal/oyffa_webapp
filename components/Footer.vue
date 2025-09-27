<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <img 
              src="/WhatsApp_Image_2025-09-22_at_23.05.33-removebg-preview.png" 
              alt="Oyffa Technologies" 
              class="h-18 w-auto"
            />
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Research-driven product company specializing in AI, automation, and custom software solutions. 
            Founded by IIT alumni with a mission to democratize intelligent technology.
          </p>
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-sm">
              <Icon name="heroicons:envelope" class="h-4 w-4 text-blue-400" />
              <span>hello@oyffa.com</span>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <Icon name="heroicons:phone" class="h-4 w-4 text-blue-400" />
              <span>+91 8607629309</span>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <Icon name="heroicons:map-pin" class="h-4 w-4 text-blue-400" />
              <span>Global Service</span>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <a
                href="#services"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Company</h3>
          <ul class="space-y-3">
            <li v-for="item in companyLinks" :key="item.label">
              <component
                :is="item.href.startsWith('mailto:') ? 'a' : 'NuxtLink'"
                :href="item.href.startsWith('mailto:') ? item.href : undefined"
                :to="item.href.startsWith('mailto:') ? undefined : item.href"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                {{ item.label }}
              </component>
            </li>
          </ul>
        </div>

        <!-- Industries -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Industries</h3>
          <ul class="space-y-3">
            <li v-for="industry in industries" :key="industry">
              <NuxtLink
                to="/contact"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                {{ industry }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 border-t border-gray-700 text-center">
        <p class="text-gray-500 text-sm">
          &copy; 2024 Oyffa. All rights reserved. | Built with passion for innovation and intelligent automation | IIT Alumni Founded
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const services = [
  'Automation Solutions',
  'AI & Data Science',
  'Mobile Development',
  'Web Development & SaaS',
  'Quantum Computing',
  'Low-Code Solutions'
]

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact' },
  { label: 'Our Expertise', href: '/services' },
  { label: 'Careers', href: 'mailto:hello@oyffa.com' },
  { label: 'Research', href: 'mailto:research@oyffa.com' }
]

const industries = [
  'Healthcare & Life Sciences',
  'Financial Services',
  'E-commerce & Retail',
  'Manufacturing & Supply Chain',
  'Education & EdTech',
  'Startups & SMBs'
]
</script>