<template>
  <section id="education" class="section-padding gradient-bg relative overflow-hidden section-transition">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 animate-on-scroll fade-in-up">
        <h2 class="section-title">EDUCATION</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div 
          v-for="(edu, index) in education" 
          :key="index" 
          class="education-card card card-enhanced hover-glow-enhanced hover-3d animate-on-scroll zoom-in"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="flex items-start">
            <div class="bg-cyan-400 text-gray-900 w-16 h-16 flex items-center justify-center mr-6 flex-shrink-0 transform transition duration-500 hover:rotate-12">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white mb-2" style="font-family: 'Orbitron', sans-serif;">{{ edu.degree }}</h3>
              <h4 class="text-xl text-cyan-400 mb-1">{{ edu.institution }}</h4>
              <p class="text-gray-400 mb-4">{{ edu.period }}</p>
              <p class="text-gray-300">{{ edu.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
          institution: 'ASIAN INSTITUTE OF COMPUTER STUDIES',
          period: '2016-2018',
          location: 'General mariano Alvarez, Philippines'
        },
        {
          degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
          institution: 'ASIAN INSTITUTE OF COMPUTER STUDIES',
          period: '2018-2020',
          location: 'Upper Bicutan, Metro Manila, Philippines'
        }
      ]
    }
  }
}
</script>