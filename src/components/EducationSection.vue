<template>
  <section id="education" class="section-padding gradient-bg relative overflow-hidden section-transition pro-section">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <!-- Geometric shapes for visual interest -->
    <div class="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20 transform rotate-45"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 border-r-2 border-b-2 border-purple-500/20 transform rotate-45"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 animate-on-scroll fade-in-up">
        <h2 class="section-title">EDUCATION</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4">My academic background and educational qualifications</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div 
          v-for="(edu, index) in education" 
          :key="index" 
          class="education-card glass-card glass-hover group animate-on-scroll zoom-in"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="glass-reflection"></div>
          <!-- Corner accent -->
          <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
          <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
          
          <div class="flex flex-col md:flex-row items-start">
            <div class="bg-cyan-400 text-gray-900 w-16 h-16 flex items-center justify-center mr-6 flex-shrink-0 transform transition duration-500 group-hover:rotate-12">
              <svg class="w-8 h-8 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-2" style="font-family: 'Orbitron', sans-serif;">{{ edu.degree }}</h3>
              <h4 class="text-xl text-cyan-400 mb-1">{{ edu.institution }}</h4>
              <p class="text-gray-400 mb-2">{{ edu.period }}</p>
              <div class="flex items-center text-gray-300 group-hover:text-cyan-400 transition-colors cursor-pointer" @click="toggleMap(index)">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{{ edu.location }}</span>
              </div>
            </div>
          </div>
          
          <!-- Map Section -->
          <div class="mt-4 overflow-hidden transition-all duration-500 max-h-0" :class="{ 'max-h-64': activeMap === index }">
            <div class="map-container relative h-64 bg-gray-900/50">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="inline-block p-4 bg-gray-800/80 backdrop-blur-sm">
                    <h4 class="text-white font-bold mb-2">{{ edu.location }}</h4>
                    <p class="text-gray-400 text-sm mb-3">Coordinates: {{ edu.coordinates }}</p>
                    <a 
                      :href="edu.mapUrl" 
                      target="_blank" 
                      class="inline-flex items-center px-4 py-2 bg-cyan-500 text-gray-900 text-sm font-medium hover:bg-cyan-400 transition-colors"
                    >
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6l-3 3m3-3l3 3"></path>
                      </svg>
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
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
      activeMap: null,
      education: [
        {
          degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
          institution: 'ASIAN INSTITUTE OF COMPUTER STUDIES',
          period: '2016-2018',
          location: 'General Mariano Alvarez, Philippines',
          coordinates: '14.3833° N, 120.9333° E',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=General+Mariano+Alvarez+Cavite'
        },
        {
          degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
          institution: 'ASIAN INSTITUTE OF COMPUTER STUDIES',
          period: '2018-2020',
          location: 'Upper Bicutan, Metro Manila, Philippines',
          coordinates: '14.4833° N, 121.0500° E',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Upper+Bicutan+Taguig'
        }
      ]
    }
  },
  methods: {
    toggleMap(index) {
      if (this.activeMap === index) {
        this.activeMap = null;
      } else {
        this.activeMap = index;
      }
    }
  }
}
</script>

<style scoped>
/* Enhanced glass effect without rounded corners */
.glass-card {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
}
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}
.glass-card:hover::before {
  transform: translateX(100%);
}
.glass-card:hover {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 8px 30px rgba(0, 212, 255, 0.2);
  transform: translateY(-5px);
}

/* Glass reflection effect */
.glass-reflection {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.glass-hover:hover .glass-reflection {
  opacity: 1;
}

/* Map container styles */
.map-container {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  position: relative;
  overflow: hidden;
}
.map-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230a0a0a"/><path d="M0,0 L100,100 M100,0 L0,100" stroke="%2300d4ff" stroke-width="0.5" opacity="0.3"/></svg>');
  opacity: 0.1;
  pointer-events: none;
}

/* Education card specific styles */
.education-card {
  height: 100%;
}

/* Location text hover effect */
.location-text {
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
}
.location-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  transition: width 0.3s ease;
}
.location-text:hover::after {
  width: 100%;
}

/* Enhanced button styles */
.map-button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 255, 0.1));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.map-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent);
  transition: left 0.5s ease;
}
.map-button:hover::before {
  left: 100%;
}
.map-button:hover {
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 255, 0.2));
  border-color: rgba(0, 212, 255, 0.5);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}
</style>