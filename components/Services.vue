<template>
  <section id="services" class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Our{' '}
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive technology solutions designed to accelerate your digital transformation 
          and drive business growth through intelligent automation.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden"
        >
          <!-- Background Gradient Effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <!-- Content -->
          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="service.icon" class="h-8 w-8 lg:h-10 lg:w-10 text-white" />
            </div>

            <!-- Title and Description -->
            <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-base lg:text-lg">
              {{ service.description }}
            </p>

            <!-- Features List -->
            <ul class="space-y-3">
              <li v-for="(feature, featureIndex) in service.features" :key="featureIndex" class="flex items-start gap-3">
                <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm lg:text-base">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'heroicons:cpu-chip',
    title: 'Automation Solutions',
    description: 'Transform your workflow with intelligent automation that eliminates repetitive tasks and accelerates business processes with enterprise-grade reliability.',
    features: [
      'Workflow Automation & Orchestration',
      'Robotic Process Automation (RPA)',
      'ETL Pipeline Development',
      'Business Process Optimization',
      '60-80% reduction in manual tasks'
    ]
  },
  {
    icon: 'heroicons:brain',
    title: 'AI & Data Science',
    description: 'Harness the power of AI for business intelligence with custom solutions that transform data into actionable insights and competitive advantages.',
    features: [
      'Large Language Model Integration',
      'RAG Systems & NLP Solutions',
      'Computer Vision & ML Models',
      'Predictive Analytics & Forecasting',
      'Custom AI Model Development'
    ]
  },
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences across all devices and platforms with modern design principles.',
    features: [
      'Native Android & iOS Development',
      'Cross-Platform Flutter Applications',
      'Progressive Web Apps (PWA)',
      'Real-time Features & Notifications',
      'App Store Optimization'
    ]
  },
  {
    icon: 'heroicons:globe-alt',
    title: 'Web Development & SaaS',
    description: 'Scalable web applications and SaaS platforms built with modern technologies that grow with your business and adapt to changing requirements.',
    features: [
      'React.js & Next.js Development',
      'Cloud-Native Architecture',
      'Microservices & API Design',
      'DevOps & Performance Optimization',
      'Enterprise-grade Security'
    ]
  },
  {
    icon: 'heroicons:bolt',
    title: 'Quantum Computing Research',
    description: 'Exploring next-generation computing paradigms with quantum algorithm development and hybrid classical-quantum solutions for complex optimization.',
    features: [
      'Quantum Algorithm Development',
      'Quantum Machine Learning',
      'Optimization Problem Solving',
      'Financial Modeling & Risk Analysis',
      'Supply Chain Optimization'
    ]
  },
  {
    icon: 'heroicons:code-bracket',
    title: 'Low-Code/No-Code Solutions',
    description: 'Accelerate digital transformation with rapid development platforms and citizen developer enablement for faster time-to-market.',
    features: [
      'Custom Platform Development',
      'Business Process Automation',
      'Rapid Prototyping & MVP',
      'Legacy System Modernization',
      'Integration & Data Migration'
    ]
  }
]
</script>