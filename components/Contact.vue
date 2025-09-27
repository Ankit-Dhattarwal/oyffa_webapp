<template>
  <section id="contact" class="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-20"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl opacity-15"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Get In Touch
        </h2>
        <p class="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Ready to transform your business with cutting-edge technology? Let's discuss how we can 
          help accelerate your digital transformation journey.
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 lg:gap-8">
            <div
              v-for="(item, index) in contactItems"
              :key="index"
              class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div class="flex items-center gap-4 mb-4">
                <Icon :name="item.icon" class="h-6 w-6 text-blue-200" />
                <h3 class="text-lg lg:text-xl font-bold">{{ item.title }}</h3>
              </div>
              <p class="text-blue-100 text-sm lg:text-base mb-3 leading-relaxed">
                {{ item.description }}
              </p>
              <div class="text-white font-semibold text-sm lg:text-base">
                {{ item.action }}
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
          <div class="text-center mb-8">
            <h3 class="text-2xl lg:text-3xl font-bold mb-4">Start Your Project</h3>
            <div class="w-16 h-1 bg-white/50 rounded-full mx-auto"></div>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6 lg:space-y-8">
            <!-- Name and Email Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-white font-medium mb-3">
                  Full Name *
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-white font-medium mb-3">
                  Email Address *
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                  required
                />
              </div>
            </div>

            <!-- Company and Phone Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="company" class="block text-white font-medium mb-3">
                  Company/Organization
                </label>
                <input
                  v-model="formData.company"
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                />
              </div>
              <div>
                <label for="phone" class="block text-white font-medium mb-3">
                  Phone Number
                </label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                />
              </div>
            </div>

            <!-- Service and Budget Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="service" class="block text-white font-medium mb-3">
                  Service Interest *
                </label>
                <select
                  v-model="formData.service"
                  id="service"
                  name="service"
                  class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                  required
                >
                  <option value="" class="text-gray-800">Select a service</option>
                  <option value="automation" class="text-gray-800">Automation Solutions</option>
                  <option value="ai-ml" class="text-gray-800">AI & Data Science</option>
                  <option value="mobile" class="text-gray-800">Mobile App Development</option>
                  <option value="web" class="text-gray-800">Web Development & SaaS</option>
                  <option value="quantum" class="text-gray-800">Quantum Computing Research</option>
                  <option value="lowcode" class="text-gray-800">Low-Code/No-Code Solutions</option>
                  <option value="consultation" class="text-gray-800">General Consultation</option>
                </select>
              </div>
              <div>
                <label for="budget" class="block text-white font-medium mb-3">
                  Project Budget Range
                </label>
                <select
                  v-model="formData.budget"
                  id="budget"
                  name="budget"
                  class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                >
                  <option value="" class="text-gray-800">Select budget range</option>
                  <option value="5k-15k" class="text-gray-800">$5,000 - $15,000</option>
                  <option value="15k-50k" class="text-gray-800">$15,000 - $50,000</option>
                  <option value="50k-100k" class="text-gray-800">$50,000 - $100,000</option>
                  <option value="100k+" class="text-gray-800">$100,000+</option>
                  <option value="discuss" class="text-gray-800">Let's discuss</option>
                </select>
              </div>
            </div>

            <!-- Timeline -->
            <div>
              <label for="timeline" class="block text-white font-medium mb-3">
                Project Timeline
              </label>
              <select
                v-model="formData.timeline"
                id="timeline"
                name="timeline"
                class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
              >
                <option value="" class="text-gray-800">Select timeline</option>
                <option value="immediate" class="text-gray-800">Immediate (< 1 month)</option>
                <option value="short" class="text-gray-800">Short-term (1-3 months)</option>
                <option value="medium" class="text-gray-800">Medium-term (3-6 months)</option>
                <option value="long" class="text-gray-800">Long-term (6+ months)</option>
                <option value="ongoing" class="text-gray-800">Ongoing partnership</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-white font-medium mb-3">
                Project Details *
              </label>
              <textarea
                v-model="formData.message"
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project goals, technical requirements, and how we can help you succeed..."
                class="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-white text-blue-600 px-8 py-4 lg:py-5 rounded-lg font-bold text-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <div v-if="isSubmitting" class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              <Icon v-else name="heroicons:paper-airplane" class="h-5 w-5" />
              {{ isSubmitting ? 'Sending...' : 'Send Project Inquiry' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const formData = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  timeline: '',
  message: ''
})

const isSubmitting = ref(false)

const contactItems = [
  {
    icon: 'heroicons:envelope',
    title: 'Business Inquiries',
    description: 'Ready to transform your business with AI and automation? Let\'s discuss your project requirements and explore how Oyffa can help accelerate your digital transformation.',
    action: 'hello@oyffa.com'
  },
  {
    icon: 'heroicons:globe-alt',
    title: 'Research Collaboration',
    description: 'Interested in cutting-edge research in AI, quantum computing, or automation? We welcome academic partnerships and collaborative research opportunities.',
    action: 'research@oyffa.com'
  },
  {
    icon: 'heroicons:phone',
    title: 'Enterprise Solutions',
    description: 'Need scalable enterprise solutions? Our team specializes in large-scale implementations, system integrations, and custom development for Fortune 500 companies.',
    action: '+91 8607629309'
  },
  {
    icon: 'heroicons:map-pin',
    title: 'Global Delivery',
    description: 'Based in India with a global perspective. We serve clients worldwide, delivering remote-first solutions with 24/7 support and seamless communication.',
    action: 'Worldwide Service'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true

  // Validate required fields
  const requiredFields = ['name', 'email', 'service', 'message']
  const missingFields = requiredFields.filter(field => !formData[field].trim())

  if (missingFields.length > 0) {
    alert(`Please fill in the following required fields: ${missingFields.join(', ')}`)
    isSubmitting.value = false
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    alert('Please enter a valid email address.')
    isSubmitting.value = false
    return
  }

  // Simulate form submission
  setTimeout(() => {
    alert(`✅ Thank you ${formData.name}! Your inquiry has been received. Our team will contact you within 24 hours at ${formData.email}.`)
    
    // Reset form
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    
    isSubmitting.value = false
  }, 2000)
}
</script>