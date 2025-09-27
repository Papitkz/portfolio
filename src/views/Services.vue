<template>
  <div class="py-16 bg-gradient-to-b from-white to-yellow-50 min-h-screen">
    <!-- Decorative top curve -->
    <div class="gold-curve" style="top: -1px; bottom: auto; transform: rotate(180deg);"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold mb-4 text-yellow-600 serif gold-accent animate-fade-in-up">Our Services</h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
          We offer a comprehensive range of nail services to enhance your natural beauty.
        </p>
      </div>

      <!-- Service Categories -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-10 text-center text-yellow-600 serif gold-accent animate-fade-in-up animation-delay-200">Service Categories</h2>
        
        <!-- Mobile view: List layout with zoom animation -->
        <div v-if="isMobile" class="space-y-4">
          <div 
            v-for="(category, index) in categories" 
            :key="index" 
            class="service-card bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 animate-zoom-in"
            :class="{ 'highlighted': highlightedItem === index }"
            :style="`animation-delay: ${index * 100}ms`"
            @click="highlightItem(index)"
          >
            <div class="flex items-center">
              <div class="service-icon mr-4 flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-bold truncate">{{ category.name }}</h3>
                <p class="text-gray-600 text-sm mt-1 line-clamp-2">{{ category.description }}</p>
              </div>
              <svg 
                class="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Desktop view: Grid layout -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(category, index) in categories" 
            :key="index" 
            class="service-card girlie-card p-8 text-center animate-zoom-in hover-lift"
            :class="{ 'highlighted': highlightedItem === index }"
            :style="`animation-delay: ${index * 100}ms`"
            @click="highlightItem(index)"
          >
            <div class="service-icon mx-auto mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ category.name }}</h3>
            <p class="text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>

      <!-- Popular Services -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-10 text-center text-yellow-600 serif gold-accent animate-fade-in-up animation-delay-200">Popular Services</h2>
        
        <!-- Mobile view: List layout with zoom animation -->
        <div v-if="isMobile" class="space-y-4">
          <div 
            v-for="(popular, index) in popularServices" 
            :key="index" 
            class="service-card bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 animate-zoom-in"
            :class="{ 'highlighted': highlightedItem === index + 10 }"
            :style="`animation-delay: ${index * 100}ms`"
            @click="highlightItem(index + 10)"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-start flex-1 min-w-0">
                <div class="service-icon mr-4 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <div class="min-w-0">
                  <h3 class="text-lg font-bold truncate">{{ popular.name }}</h3>
                  <p class="text-yellow-600 font-bold mt-1">{{ popular.price }}</p>
                </div>
              </div>
              <div class="text-right ml-4 flex-shrink-0">
                <span class="text-sm text-gray-500 block">{{ popular.duration }}</span>
                <router-link
                  to="/appointments"
                  class="btn-primary text-sm mt-2 inline-block"
                >
                  Book Now
                </router-link>
              </div>
            </div>
            <p class="text-gray-600 text-sm mt-3 ml-16 line-clamp-2">{{ popular.description }}</p>
          </div>
        </div>
        
        <!-- Desktop view: Grid layout -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(popular, index) in popularServices" 
            :key="index" 
            class="service-card girlie-card overflow-hidden animate-zoom-in hover-lift"
            :class="{ 'highlighted': highlightedItem === index + 10 }"
            :style="`animation-delay: ${index * 100}ms`"
            @click="highlightItem(index + 10)"
          >
            <div class="h-48 bg-gradient-to-r from-yellow-100 to-yellow-200 flex items-center justify-center">
              <div class="text-center">
                <div class="service-icon mx-auto mb-4">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <span class="text-yellow-800 font-bold">{{ popular.name }}</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold">{{ popular.name }}</h3>
                <span class="text-lg font-bold text-yellow-600">{{ popular.price }}</span>
              </div>
              <p class="text-gray-600 mb-4">{{ popular.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ popular.duration }}</span>
                <router-link
                  to="/appointments"
                  class="btn-primary text-sm"
                >
                  Book Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Complete Service Menu - List Design -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-10 text-center text-yellow-600 serif gold-accent animate-fade-in-up animation-delay-200">Complete Service Menu</h2>
        
        <div class="max-w-4xl mx-auto">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            class="service-card bg-white rounded-xl shadow-md p-5 mb-4 border-l-4 border-yellow-500 animate-zoom-in"
            :class="{ 'highlighted': highlightedItem === index + 20 }"
            :style="`animation-delay: ${index * 50}ms`"
            @click="highlightItem(index + 20)"
          >
            <div class="flex flex-col">
              <div class="flex justify-between items-start mb-3">
                <div class="flex-1 min-w-0">
                  <h3 class="service-list-title text-lg font-bold truncate">{{ service.name }}</h3>
                  <p class="service-list-price text-lg font-bold text-yellow-600 mt-1 mr-3">{{ service.price }}</p>
                </div>
                <router-link
                  to="/appointments"
                  class="btn-primary text-sm ml-4 flex-shrink-0"
                >
                  Book
                </router-link>
              </div>
              <p class="service-list-description text-gray-600 mb-3 line-clamp-2">{{ service.description }}</p>
              <div class="flex flex-wrap">
                <span
                  v-for="(tag, tagIndex) in service.tags"
                  :key="tagIndex"
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add-On Services -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-10 text-center text-yellow-600 serif gold-accent animate-fade-in-up animation-delay-200">Add-On Services</h2>
        
        <!-- Mobile view: List layout with zoom animation -->
        <div v-if="isMobile" class="space-y-4">
          <div 
            v-for="(addon, index) in addons" 
            :key="index" 
            class="service-card bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 animate-zoom-in"
            :class="{ 'highlighted': highlightedItem === index + 30 }"
            :style="`animation-delay: ${index * 100}ms`"
            @click="highlightItem(index + 30)"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center flex-1 min-w-0">
                <div class="service-icon mr-4 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <div class="min-w-0">
                  <h3 class="text-lg font-bold truncate">{{ addon.name }}</h3>
                  <span class="text-yellow-600 font-bold mt-1">{{ addon.price }}</span>
                </div>
              </div>
              <svg 
                class="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
            <p class="text-gray-600 text-sm mt-3 ml-16 line-clamp-2">{{ addon.description }}</p>
          </div>
        </div>
        
        <!-- Desktop view: Grid layout -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(addon, index) in addons" 
            :key="index" 
            class="service-card girlie-card p-8 text-center animate-zoom-in hover-lift"
            :class="{ 'highlighted': highlightedItem === index + 30 }"
            :style="`animation-delay: ${index * 100}ms`"
            @click="highlightItem(index + 30)"
          >
            <div class="service-icon mx-auto mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ addon.name }}</h3>
            <p class="text-gray-600 mb-4">{{ addon.description }}</p>
            <span class="text-lg font-bold text-yellow-600">{{ addon.price }}</span>
          </div>
        </div>
      </div>

      <!-- Home Service Information -->
      <div class="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg p-8 mb-20 relative overflow-hidden animate-zoom-in">
        <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-yellow-100 rounded-full filter blur-3xl opacity-20 -ml-24 -mb-24"></div>
        
        <div class="relative z-10">
          <h2 class="text-2xl font-bold mb-8 text-center text-yellow-600 serif gold-accent">Home Service Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 class="text-lg font-bold mb-4 flex items-center">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                What's Included
              </h3>
              <ul class="text-gray-600 space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Professional nail technician with 10+ years experience</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>All necessary equipment and premium products</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Transportation to your location within service area</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete setup and cleanup service</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4 flex items-center">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Pricing & Booking
              </h3>
              <div class="bg-white p-6 rounded-lg mb-4 shadow-sm">
                <p class="text-gray-600 mb-2">Home service fee: <span class="font-bold text-yellow-600">P300</span></p>
                <p class="text-gray-600 text-sm">This fee is added to your selected service price and covers travel expenses and setup time.</p>
              </div>
              <p class="text-gray-600 mb-4">Additional travel fees may apply for locations outside our standard service area.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Cash</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Bank Transfer</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">GCash</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">PayMaya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Process -->
      <div>
        <h2 class="text-2xl font-bold mb-10 text-center text-yellow-600 serif gold-accent animate-fade-in-up animation-delay-200">Our Service Process</h2>
        
        <!-- Mobile view: Vertical steps with zoom animation -->
        <div v-if="isMobile" class="max-w-md mx-auto">
          <div class="relative">
            <!-- Vertical line connector -->
            <div class="absolute left-6 top-6 bottom-0 w-1 bg-yellow-200"></div>
            
            <div 
              v-for="(step, index) in serviceProcess" 
              :key="index" 
              class="relative flex mb-8 animate-zoom-in"
              :class="{ 'highlighted': highlightedItem === index + 40 }"
              :style="`animation-delay: ${index * 100}ms`"
              @click="highlightItem(index + 40)"
            >
              <div class="service-icon z-10">
                <span class="text-white font-bold">{{ index + 1 }}</span>
              </div>
              <div class="ml-6 pb-8">
                <h3 class="font-bold mb-2">{{ step.title }}</h3>
                <p class="text-gray-600 text-sm">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Desktop view: Horizontal steps -->
        <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div 
            v-for="(step, index) in serviceProcess" 
            :key="index" 
            class="service-card text-center animate-zoom-in"
            :class="{ 'highlighted': highlightedItem === index + 40 }"
            :style="`animation-delay: ${index * 100}ms`"
            @click="highlightItem(index + 40)"
          >
            <div class="relative">
              <div class="service-icon mx-auto mb-4">
                <span class="text-white font-bold">{{ index + 1 }}</span>
              </div>
              <div v-if="index < serviceProcess.length - 1" class="hidden md:block absolute top-8 left-16 w-full h-1 bg-yellow-200"></div>
            </div>
            <h3 class="font-bold mb-2">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative bottom curve -->
    <div class="gold-curve"></div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      isMobile: false,
      highlightedItem: null,
      categories: [
        {
          name: 'Gel Nails',
          description: 'Long-lasting, glossy finish that cures under UV light.'
        },
        {
          name: 'Nail Extensions',
          description: 'Add length and strength to your natural nails.'
        },
        {
          name: 'Fill-in / Floaters',
          description: 'Maintain your extensions with a fill-in service.'
        },
        {
          name: 'Gel Polish Add-on',
          description: 'Upgrade your manicure with a durable gel polish.'
        }
      ],
      popularServices: [
        {
          name: 'Gel Polish',
          price: 'P300',
          duration: '60 min',
          description: 'Long-lasting glossy finish with cuticle care and basic nail shaping.'
        },
        {
          name: 'Soft Gel Extensions',
          price: 'P500',
          duration: '90 min',
          description: 'Add length and strength with soft gel extensions in your preferred shape.'
        },
        {
          name: 'Dual Form Extensions',
          price: 'P500',
          duration: '120 min',
          description: 'Create the perfect length and shape with dual form extension technique.'
        }
      ],
      services: [
        {
          name: 'Gel Polish',
          price: 'P300',
          description: 'Includes gel application, cuticle care, and basic nail shaping.',
          tags: ['60 min', 'Gel', 'Manicure']
        },
        {
          name: 'Gel Overlay',
          price: 'P350',
          description: 'Strengthens natural nails with a layer of gel polish.',
          tags: ['90 min', 'Gel', 'Natural Nails']
        },
        {
          name: 'Soft Gel Extensions',
          price: 'P500',
          description: 'Adds length to natural nails using soft gel tips.',
          tags: ['90 min', 'Extensions', 'Soft Gel']
        },
        {
          name: 'Dual Form Extensions',
          price: 'P500',
          description: 'Creates extensions using dual forms for a perfect shape.',
          tags: ['90 min', 'Extensions', 'Dual Form']
        },
        {
          name: 'Lash Lift',
          price: 'P300',
          description: 'Enhances natural lashes with a lifting and tinting service.',
          tags: ['35 min', 'Lashes', 'Semi-permanent']
        },
        {
          name: 'Nail Repair',
          price: 'P150',
          description: 'Fix broken or damaged nails with professional repair techniques.',
          tags: ['30 min', 'Repair', 'Damaged Nails']
        },
        {
          name: 'Nail Removal (MY WORK)',
          price: 'P50',
          description: 'Remove broken or damaged nails with professional remove techniques.',
          tags: ['30 min', 'Repair', 'Damaged Nails']
        },
         {
          name: 'Nail Removal (not MY WORK)',
          price: 'P100',
          description: 'Remove broken or damaged nails with professional remove techniques.',
          tags: ['30 min', 'Repair', 'Damaged Nails']
        }
      ],
      addons: [
        {
          name: 'Nail Art (Simple)',
          price: 'P200+',
          description: 'Basic nail art designs including dots, stripes, and simple patterns.'
        },
        {
          name: 'Nail Art (Complex)',
          price: 'P500+',
          description: 'Intricate nail art designs including hand-painted details and embellishments.'
        },
        {
          name: 'French Tips',
          price: 'P300',
          description: 'Classic French tip design in white or your choice of color.'
        },
        {
          name: 'Charms & Embellishments',
          price: 'P100+',
          description: 'Add decorative charms, rhinestones, or other embellishments to your nails.'
        },
        {
          name: 'Paraffin Treatment',
          price: 'P200',
          description: 'Moisturizing paraffin wax treatment for hands or feet.'
        },
        {
          name: 'Nail Strengthener',
          price: 'P150',
          description: 'Apply a specialized nail strengthener to promote healthy nail growth.'
        }
      ],
      serviceProcess: [
        {
          title: 'Consultation',
          description: 'Discuss your preferences and nail health with our technician'
        },
        {
          title: 'Preparation',
          description: 'Nail cleaning, shaping, and cuticle care'
        },
        {
          title: 'Application',
          description: 'Application of selected products and techniques'
        },
        {
          title: 'Finishing',
          description: 'Final touches and aftercare advice'
        }
      ]
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    highlightItem(index) {
      this.highlightedItem = index;
      // Remove highlight after 1 second
      setTimeout(() => {
        this.highlightedItem = null;
      }, 1000);
    }
  }
}
</script>

<style scoped>
.service-card {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.15);
}

/* Zoom in animation */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-zoom-in {
  animation: zoomIn 0.5s ease forwards;
  opacity: 0;
}

/* Highlight effect */
.highlighted {
  background: linear-gradient(135deg, #FFFBEB 0%, #FFEFBA 100%) !important;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
  border-left-color: #D4AF37 !important;
  border-left-width: 6px !important;
}

/* Text truncation utilities */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Service list styles */
.service-list-title {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.service-list-description {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.service-list-price {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--primary-color);
}

/* Mobile-specific improvements */
@media (max-width: 768px) {
  /* Better spacing for mobile */
  .py-16 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  /* Improved service card for mobile */
  .service-card {
    margin-bottom: 1rem;
    border-radius: 12px;
    padding: 1.25rem;
  }
  
  /* Better button styling for mobile */
  .btn-primary {
    width: 100%;
    max-width: 120px;
    text-align: center;
    padding: 0.75rem 1rem;
  }
  
  /* Improved service process for mobile */
  .service-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  /* Ensure text doesn't overflow */
  .min-w-0 {
    min-width: 0;
  }
  
  /* Better spacing for list items */
  .space-y-3 > li {
    padding: 0.25rem 0;
  }
}

/* Professional typography improvements */
.text-lg {
  font-size: 1.125rem;
  line-height: 1.5;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.4;
}

/* Professional spacing improvements */
.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

/* Professional padding improvements */
.p-5 {
  padding: 1.25rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

/* Professional shadow improvements */
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>