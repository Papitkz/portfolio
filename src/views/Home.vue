<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden" style="background: linear-gradient(135deg, #FFFBEB 0%, #FFF8DC 50%, #FFEFBA 100%);">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-15 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <!-- Additional decorative elements -->
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse animation-delay-1000"></div>
        <!-- Floating particles -->
        <div class="absolute top-1/3 left-1/3 w-4 h-4 bg-yellow-400 rounded-full opacity-30 animate-float animation-delay-500"></div>
        <div class="absolute top-2/3 right-1/3 w-6 h-6 bg-yellow-300 rounded-full opacity-40 animate-float animation-delay-1500"></div>
        <div class="absolute bottom-1/3 left-2/3 w-5 h-5 bg-yellow-500 rounded-full opacity-35 animate-float animation-delay-2500"></div>
        <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-yellow-200 rounded-full opacity-25 animate-float animation-delay-3500"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <!-- Mobile view: Collapsible hero section -->
        <div v-if="isMobile" class="text-center">
          <div class="mb-6 flex justify-center">
            <img
              style="height:100px !important"
              src="../assets/and.png"
              alt="AMPER&AND Logo"
              class="object-contain"
            />
          </div>
          
          <div class="inline-block mb-3 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium animate-fade-in-up">
            Art at Your Fingertips
          </div>
          <h1 class="text-4xl font-bold mb-4 text-gray-800 leading-tight animate-fade-in-up animation-delay-100">
            Professional <span class="text-yellow-600">Nail Artistry</span>
          </h1>
          <p class="text-lg text-gray-600 mb-6 animate-fade-in-up animation-delay-200">
            Experience luxury nail services in the comfort of your home.
          </p>
          
          <div class="relative inline-block mb-6 animate-fade-in-up animation-delay-300">
            <div class="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <div class="relative">
              <img style="height:300px !important"
                src="../assets/sandra.png"
                alt="Sandra Kate Gudez - Nail Technician"
                class="rounded-xl shadow-lg mx-auto transform transition-all duration-700 hover:scale-105 hover:shadow-2xl max-w-full h-auto relative z-10"
              />
              <!-- Experience badge -->
              <div class="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-white rounded-lg p-3 shadow-lg transform rotate-6 z-20">
                <p class="text-sm font-bold">3+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <h2 class="text-xl font-bold text-yellow-600 cursive mb-2 animate-fade-in-up animation-delay-400">SANDRA KATE GUDEZ</h2>
          <p class="text-gray-600 italic mb-6 animate-fade-in-up animation-delay-400">Master Nail Technician & Owner</p>
          
          <div class="flex flex-wrap justify-center gap-4 mb-6 animate-fade-in-up animation-delay-500">
            <router-link
              to="/appointments"
              class="group relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden btn-enhanced"
            >
              <span class="relative z-10 flex items-center">
                Book Now
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </router-link>
            <router-link
              to="/services"
              class="group relative px-6 py-3 bg-white text-yellow-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-yellow-600 hover:bg-yellow-50 overflow-hidden btn-enhanced"
            >
              <span class="relative z-10 flex items-center">
                Our Services
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </router-link>
          </div>
          
          <!-- Trust indicators -->
          <div class="flex justify-center items-center space-x-6 animate-fade-in-up animation-delay-600">
            <div class="flex items-center">
              <svg class=" mb-2 w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="text-gray-600 mb-2"  >4.9/5 Rating</span>
            </div>
            <div class="flex items-center">
              <svg class="mb-2 w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-600 mb-2">100+ Happy Clients</span>
            </div>
          </div>
        </div>
        
        <!-- Desktop view: Original layout -->
        <div v-else class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <!-- Logo image added here -->
            <div class="mb-6 flex justify-center md:justify-start">
              <img
                style="height:125px !important"
                src="../assets/and.png"
                alt="AMPER&AND Logo"
                class="object-contain"
              />
            </div>
            
            <div class="inline-block mb-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium animate-fade-in-up">
              Art at Your Fingertips
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight animate-fade-in-up animation-delay-100">
              Professional <span class="text-yellow-600 relative">Nail Artistry</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-lg animate-fade-in-up animation-delay-200">
              Experience luxury nail services in the comfort of your home. Our expert technicians bring the salon to you!
            </p>
            <div class="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <router-link
                to="/appointments"
                class="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden btn-enhanced"
              >
                <span class="relative z-10 flex items-center">
                  Book Now
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </router-link>
              <router-link
                to="/services"
                class="group relative px-8 py-4 bg-white text-yellow-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-yellow-600 hover:bg-yellow-50 overflow-hidden btn-enhanced"
              >
                <span class="relative z-10 flex items-center">
                  Our Services
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </router-link>
            </div>
            
            <!-- Trust indicators -->
            <div class="flex items-center mt-8 space-x-6 animate-fade-in-up animation-delay-400">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="text-gray-600">4.9/5 Rating</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">100+ Happy Clients</span>
              </div>
            </div>
          </div>
          
           <div class="md:w-1/2 text-center">
            <div class="relative inline-block animate-float">
              <div class="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div class="relative">
                <img style="height:550px !important"
                  src="../assets/sandra.png"
                  alt="Sandra Kate Gudez - Nail Technician"
                  class="rounded-xl shadow-lg mx-auto transform transition-all duration-700 hover:scale-105 hover:shadow-2xl max-w-full h-auto relative z-10"
                />
                <!-- Decorative elements around the image -->
                <div class="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
                <div class="absolute -bottom-8 -left-8 w-8 h-8 bg-yellow-300 rounded-full opacity-30 animate-bounce animation-delay-1000"></div>
                <div class="absolute -top-8 right-8 w-10 h-10 bg-yellow-500 rounded-full opacity-20 animate-bounce animation-delay-2000"></div>
                
                <!-- Experience badge -->
                <div style="z-index:999" class="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-white rounded-lg p-3 shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-500 animate-pulse">
                  <p class="text-sm font-bold">3+ Years Experience</p>
                </div>
              </div>
            </div>
            <div class="mt-6 animate-fade-in-up animation-delay-600">
              <h2 class="text-2xl font-bold text-yellow-600 cursive">SANDRA KATE GUDEZ</h2>
              <p class="text-gray-600 italic">Master Nail Technician & Owner</p>
              <div class="flex justify-center mt-3 space-x-4">
                <a href="#" class="pro-social-link">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="pro-social-link">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Gold curve at bottom of hero -->
      <div class="gold-curve"></div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" @click="scrollToNext">
        <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section class="pro-section" ref="aboutSection">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
            Meet The Artist
          </div>
          <h2 class="pro-heading serif gold-accent animate-fade-in-up">Meet Your Nail Artist</h2>
          <div class="w-24 h-1 bg-yellow-500 mx-auto mb-6 animate-fade-in-up animation-delay-200"></div>
          <p class="pro-subheading animate-fade-in-up animation-delay-400">
            With over a decade of experience in the nail industry, Sandra Kate Gudez brings passion, creativity, and precision to every client. Her dedication to the craft and attention to detail ensures that each client leaves with nails that not only look beautiful but are also healthy and well-cared for.
          </p>
          
          <!-- Mobile view: Vertical features -->
          <div v-if="isMobile" class="mt-12 space-y-8">
            <div v-for="(feature, index) in features" :key="index" class="pro-card p-6 animate-fade-in-up" :style="`animation-delay: ${600 + index * 200}ms`">
              <div class="flex items-center">
                <div class="pro-icon mr-4 flex-shrink-0">
                  <svg v-if="feature.icon === 'shield'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <svg v-else-if="feature.icon === 'chat'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <svg v-else-if="feature.icon === 'lightning'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h3 class="pro-feature-title">{{ feature.title }}</h3>
                  <p class="pro-feature-text">{{ feature.text }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Desktop view: Grid features -->
          <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div v-for="(feature, index) in features" :key="index" class="pro-feature animate-fade-in-up animation-delay-600 group" :style="`animation-delay: ${600 + index * 200}ms`">
              <div class="pro-icon group-hover:animate-pulse">
                <svg v-if="feature.icon === 'shield'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <svg v-else-if="feature.icon === 'chat'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <svg v-else-if="feature.icon === 'lightning'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="pro-feature-title">{{ feature.title }}</h3>
              <p class="pro-feature-text">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Home Service Section -->
    <section class="pro-section">
      <div class="gold-curve" style="top: -1px; bottom: auto; transform: rotate(180deg);"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <div class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
            Convenience At Your Doorstep
          </div>
          <h2 class="pro-heading serif gold-accent animate-fade-in-up">Home Service</h2>
          <p class="pro-subheading animate-fade-in-up animation-delay-200">
            Enjoy our professional nail services in the comfort of your own home. We bring everything needed for a perfect manicure or pedicure experience.
          </p>
        </div>
        
        <!-- Mobile view: Vertical cards -->
        <div v-if="isMobile" class="space-y-6">
          <div v-for="(service, index) in homeServices" :key="index" class="pro-card p-6 animate-fade-in-up" :style="`animation-delay: ${400 + index * 200}ms`">
            <div class="flex items-start">
              <div class="pro-icon mr-4 flex-shrink-0">
                <svg v-if="service.icon === 'truck'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <svg v-else-if="service.icon === 'currency'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-else-if="service.icon === 'calendar'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="text-left">
                <h3 class="pro-feature-title">{{ service.title }}</h3>
                <p class="pro-feature-text">{{ service.text }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Desktop view: Grid layout -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in homeServices" :key="index" class="pro-card animate-fade-in-up animation-delay-400 group hover-lift" :style="`animation-delay: ${400 + index * 200}ms`">
            <div class="pro-icon group-hover:animate-pulse">
              <svg v-if="service.icon === 'truck'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <svg v-else-if="service.icon === 'currency'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <svg v-else-if="service.icon === 'calendar'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="pro-feature-title">{{ service.title }}</h3>
            <p class="pro-feature-text">{{ service.text }}</p>
          </div>
        </div>
      </div>
      
      <div class="gold-curve"></div>
    </section>

    <!-- Services Preview -->
    <section class="pro-section">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
            What We Offer
          </div>
          <h2 class="pro-heading serif gold-accent animate-fade-in-up">Our Services</h2>
          <p class="pro-subheading animate-fade-in-up animation-delay-200">
            We offer a wide range of nail services to suit your style and preferences.
          </p>
        </div>
        
        <!-- Mobile view: Carousel -->
        <div v-if="isMobile" class="relative">
          <div class="carousel-container overflow-hidden">
            <div 
              class="carousel-track flex transition-transform duration-500 ease-in-out" 
              :style="{ transform: `translateX(-${servicesCurrentSlide * 100}%)` }"
            >
              <div 
                v-for="(service, index) in services" 
                :key="index" 
                class="carousel-slide w-full flex-shrink-0 px-2"
              >
                <div class="pro-card p-6 h-full animate-fade-in-up" :style="`animation-delay: ${400 + index * 100}ms`">
                  <div class="pro-icon mx-auto mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <h3 class="pro-feature-title text-center">{{ service.name }}</h3>
                  <br>
                  <p class="pro-feature-text text-center">{{ service.description }}</p>
                  <router-link
                    to="/services"
                    class="btn-primary text-sm mt-4 block text-center"
                  >
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carousel navigation -->
          <div class="flex justify-center mt-6 space-x-2">
            <button 
              v-for="(_, index) in services" 
              :key="index" 
              @click="servicesGoToSlide(index)"
              class="w-3 h-3 rounded-full transition-colors duration-300"
              :class="index === servicesCurrentSlide ? 'bg-yellow-500' : 'bg-gray-300'"
              aria-label="Go to slide {{ index + 1 }}"
            ></button>
          </div>
          
          <!-- Carousel arrows -->
          <button 
            @click="servicesPrevSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yellow-600 rounded-full p-2 shadow-md transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            @click="servicesNextSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yellow-600 rounded-full p-2 shadow-md transition-all duration-300"
            aria-label="Next slide"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <!-- Desktop view: Grid layout -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(service, index) in services" :key="index" class="pro-card animate-fade-in-up group hover-lift" :style="`animation-delay: ${400 + index * 100}ms`">
            <div class="pro-icon group-hover:animate-pulse">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="pro-feature-title">{{ service.name }}</h3>
            <p class="pro-feature-text">{{ service.description }}</p>
            <br></br>
            <router-link
              to="/services"
              class="btn-primary mt-4 ml-n2"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Designs -->
    <section class="pro-section">
      <div class="gold-curve" style="top: -1px; bottom: auto; transform: rotate(180deg);"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <div class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
            Trending Styles
          </div>
          <h2 class="pro-heading serif gold-accent animate-fade-in-up">Popular Nail Designs</h2>
          <p class="pro-subheading animate-fade-in-up animation-delay-200">
            Explore our most requested nail art designs and trends.
          </p>
        </div>
        
        <!-- Mobile view: Carousel -->
        <div v-if="isMobile" class="relative">
          <div class="carousel-container overflow-hidden">
            <div 
              class="carousel-track flex transition-transform duration-500 ease-in-out" 
              :style="{ transform: `translateX(-${designsCurrentSlide * 100}%)` }"
            >
              <div 
                v-for="(design, index) in popularDesigns" 
                :key="index" 
                class="carousel-slide w-full flex-shrink-0 px-2"
              >
                <div class="pro-card overflow-hidden h-full animate-fade-in-up" :style="`animation-delay: ${400 + index * 100}ms`">
                  <div class="h-48 bg-gradient-to-r from-yellow-100 to-yellow-200 flex items-center justify-center relative overflow-hidden">
                    <img
                      :src="design.link"
                      :alt="design.name"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-bold mb-1">{{ design.name }}</h3>
                    <p class="text-gray-600 text-sm mb-3">{{ design.description }}</p>
                    <router-link to="/gallery" class="btn-primary text-sm block text-center">
                      View Gallery
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carousel navigation -->
          <div class="flex justify-center mt-6 space-x-2">
            <button 
              v-for="(_, index) in popularDesigns" 
              :key="index" 
              @click="designsGoToSlide(index)"
              class="w-3 h-3 rounded-full transition-colors duration-300"
              :class="index === designsCurrentSlide ? 'bg-yellow-500' : 'bg-gray-300'"
              aria-label="Go to slide {{ index + 1 }}"
            ></button>
          </div>
          
          <!-- Carousel arrows -->
          <button 
            @click="designsPrevSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yellow-600 rounded-full p-2 shadow-md transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            @click="designsNextSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yellow-600 rounded-full p-2 shadow-md transition-all duration-300"
            aria-label="Next slide"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <!-- Desktop view: Grid layout -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="(design, index) in popularDesigns" :key="index" class="pro-card overflow-hidden animate-fade-in-up group hover-lift" :style="`animation-delay: ${400 + index * 100}ms`">
            <div class="h-64 bg-gradient-to-r from-yellow-100 to-yellow-200 flex items-center justify-center relative overflow-hidden">
              <img
                :src="design.link"
                :alt="design.name"
                class="design-image"
                :title="design.name"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 class="text-white font-bold text-lg">{{ design.name }}</h3>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold mb-1">{{ design.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ design.description }}</p>
              <router-link to="/gallery" class="btn-primary text-sm">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-10 animate-fade-in-up animation-delay-800">
          <router-link to="/gallery" class="btn-primary">
            View All Designs
          </router-link>
        </div>
      </div>
      
      <div class="gold-curve"></div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isMobile: false,
      servicesCurrentSlide: 0,
      designsCurrentSlide: 0,
      services: [
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
      features: [
        {
          icon: 'shield',
          title: 'Certified Professional',
          text: 'Fully licensed and certified in all nail techniques'
        },
        {
          icon: 'chat',
          title: 'Personalized Service',
          text: 'Custom designs tailored to your unique style'
        },
        {
          icon: 'lightning',
          title: 'Latest Trends',
          text: 'Always up-to-date with the latest nail art trends'
        }
      ],
      homeServices: [
        {
          icon: 'truck',
          title: 'Transportation Included',
          text: 'Our technicians travel to your location with all necessary equipment and products.'
        },
        {
          icon: 'currency',
          title: 'Home Service Fee',
          text: 'A small home service fee is added to cover travel expenses and setup time.'
        },
        {
          icon: 'calendar',
          title: 'Flexible Scheduling',
          text: 'Book appointments at your convenience, including evenings and weekends.'
        }
      ],
      popularDesigns: [
        {
          name: 'French Tips',
          description: 'Classic and elegant white tips',
          link:'https://i.pinimg.com/736x/88/01/74/88017496b1766b005d72b9098de01232.jpg'
        },
        {
          name: 'Ombre Nails',
          description: 'Beautiful gradient color blend',
          link:'https://i.pinimg.com/736x/fe/de/c8/fedec83a7879e31fa4a134747980f56d.jpg'
        },
        {
          name: 'Nail Art',
          description: 'Custom designs and patterns',
          link:'https://i.pinimg.com/1200x/9c/bb/b8/9cbbb8dfa2e5f11dbb1fd54b5fe6b9ce.jpg'
        },
        {
          name: 'Chrome Finish',
          description: 'Mirror-like metallic shine',
          link:'https://i.pinimg.com/736x/41/4a/05/414a0501098b2a8bef923b45a69ea9d6.jpg'
        }
      ]
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
    
    // Auto-rotate carousels
    this.servicesInterval = setInterval(() => {
      if (this.isMobile) {
        this.servicesNextSlide();
      }
    }, 5000);
    
    this.designsInterval = setInterval(() => {
      if (this.isMobile) {
        this.designsNextSlide();
      }
    }, 5000);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
    clearInterval(this.servicesInterval);
    clearInterval(this.designsInterval);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    scrollToNext() {
      const aboutSection = this.$refs.aboutSection;
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    // Services carousel methods
    servicesNextSlide() {
      this.servicesCurrentSlide = (this.servicesCurrentSlide + 1) % this.services.length;
    },
    servicesPrevSlide() {
      this.servicesCurrentSlide = (this.servicesCurrentSlide - 1 + this.services.length) % this.services.length;
    },
    servicesGoToSlide(index) {
      this.servicesCurrentSlide = index;
    },
    // Designs carousel methods
    designsNextSlide() {
      this.designsCurrentSlide = (this.designsCurrentSlide + 1) % this.popularDesigns.length;
    },
    designsPrevSlide() {
      this.designsCurrentSlide = (this.designsCurrentSlide - 1 + this.popularDesigns.length) % this.popularDesigns.length;
    },
    designsGoToSlide(index) {
      this.designsCurrentSlide = index;
    }
  }
}
</script>

<style scoped>
/* Animation classes */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.design-image {
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  transition: transform 0.5s ease;
  object-fit: cover;
}

.group:hover .design-image {
  transform: scale(1.05);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Carousel styles */
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
}

/* Professional gold background for all sections */
section {
  background: var(--bg-gradient);
  position: relative;
}

/* Professional card styles */
.pro-card {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: var(--font-family);
}

.pro-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gold-gradient);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.pro-card:hover::before {
  transform: scaleX(1);
}

.pro-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
}

/* Professional button styles */
.btn-primary {
  background: var(--gold-gradient);
  color: white;
  border-radius: 50px;
  padding: 12px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-family: var(--font-family);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  z-index: -1;
}

.btn-primary:hover::before {
  transform: translateX(0);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
}

/* Professional navigation */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  font-family: var(--font-family);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gold-gradient);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Professional footer */
.pro-footer {
  background: linear-gradient(to bottom, #FFFBEB, #FFF8DC);
  padding: 4rem 0 2rem;
  position: relative;
  font-family: var(--font-family);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.pro-footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  font-family: var(--font-family);
}

.pro-footer-link {
  display: block;
  color: var(--text-light);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  font-family: var(--font-family);
}

.pro-footer-link:hover {
  color: var(--primary-color);
}

.pro-footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  margin-top: 3rem;
  text-align: center;
  color: var(--text-light);
  font-family: var(--font-family);
}

/* Mobile-specific improvements */
@media (max-width: 768px) {
  /* Improved mobile layout for features and home services */
  .pro-card {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  /* Fixed icon container with proper alignment */
  .pro-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(212, 175, 55, 0.1);
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 1rem;
  }
  
  .pro-icon svg {
    width: 24px;
    height: 24px;
    color: #D4AF37; /* Gold color */
  }
  
  /* Text container adjustments */
  .text-left {
    flex: 1;
    padding-left: 0.5rem;
  }
  
  /* Feature title and text adjustments */
  .pro-feature-title {
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  
  .pro-feature-text {
    font-size: 0.875rem;
    line-height: 1.4;
  }
  
  /* Section padding adjustments */
  .pro-section {
    padding: 3rem 0;
  }
  
  /* Improved carousel styling */
  .carousel-container {
    padding: 0 1rem;
  }
  
  .carousel-slide {
    padding: 0 0.5rem;
  }
  
  /* Button improvements */
  .btn-primary {
    padding: 10px 20px;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
  }
  
  /* Hero section adjustments */
  .hero-section {
    padding: 2rem 0;
  }
  
  /* Service card improvements */
  .service-card {
    margin-bottom: 1rem;
  }
  
  /* Design card improvements */
  .design-card {
    margin-bottom: 1rem;
  }
  
  /* Improved spacing for mobile */
  .container {
    padding: 0 1rem;
  }
}
</style>