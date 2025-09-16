<template>
  <section id="experience" class="section-padding gradient-bg relative overflow-hidden section-transition">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-purple-900/5"></div>
    
    <!-- Geometric shapes for visual interest -->
    <div class="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20 transform rotate-45"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 border-r-2 border-b-2 border-purple-500/20 transform rotate-45"></div>
    
    <!-- Floating elements -->
    <div class="geometric-shape shape-triangle floating-element" style="top: 14%; left: 8%; animation-delay: 0.6s;"></div>
    <div class="geometric-shape shape-hexagon floating-element" style="top: 68%; right: 9%; animation-delay: 2.4s;"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 animate-on-scroll fade-in-up">
        <h2 class="section-title">EXPERIENCE</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
      </div>
      
      <div class="relative max-w-6xl mx-auto">
        <!-- Removed the vertical timeline line -->
        
        <div 
          v-for="(job, index) in jobs" 
          :key="job.title" 
          class="mb-16 md:mb-20 relative animate-on-scroll"
          :class="index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'" 
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <!-- Timeline Dot with Enhanced Design -->
          <div class="timeline-dot timeline-dot-enhanced z-10 absolute left-1/2 transform -translate-x-1/2 top-8 hidden md:flex">
            <div class="relative">
              <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/25 transform rotate-45">
                <svg class="w-6 h-6 text-gray-900 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <!-- Current Position Indicator -->
              <div v-if="job.current" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center animate-pulse">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Connecting line for desktop (only between items) -->
          <div v-if="index < jobs.length - 1" class="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-20 w-0.5 h-16 bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
          
          <div class="flex flex-col md:flex-row items-center pt-8">
            <!-- Left side content (title, company, period) -->
            <div :class="[
              'w-full md:w-5/12 mb-6 md:mb-0',
              index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'
            ]">
              <div class="glass-effect p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                <!-- Corner accent -->
                <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
                <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
                
                <h3 class="text-2xl font-bold text-white mb-2" style="font-family: 'Orbitron', sans-serif;">{{ job.title }}</h3>
                <div class="flex items-center mb-3" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                  <svg class="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-5L9 2H4z" clip-rule="evenodd"></path>
                  </svg>
                  <h4 class="text-xl text-cyan-400">{{ job.company }}</h4>
                </div>
                <div class="flex items-center" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                  <svg class="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1zM9 4h6v1H9V4z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="text-gray-400">{{ job.period }}</p>
                </div>
              </div>
            </div>
            
            <!-- Right side content (tasks) -->
            <div :class="[
              'w-full md:w-7/12',
              index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1'
            ]">
              <div class="card card-enhanced hover-glow-enhanced hover-3d glass-effect p-6 h-full transform hover:-translate-y-1 relative overflow-hidden">
                <!-- Corner accent -->
                <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
                <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
                
                <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
                  <svg class="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  KEY RESPONSIBILITIES
                </h4>
                <ul class="space-y-3">
                  <li v-for="(task, i) in job.tasks" :key="i" class="flex items-start group">
                    <div class="mt-1 mr-3 flex-shrink-0">
                      <div class="w-6 h-6 bg-cyan-900/30 flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300">
                        <svg class="w-3 h-3 text-cyan-400 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <span class="text-gray-300 group-hover:text-white transition-colors duration-300">{{ task }}</span>
                  </li>
                </ul>
                
                <!-- Skills used in this job -->
                <div class="mt-6 pt-4 border-t border-gray-800">
                  <h5 class="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES USED</h5>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(skill, i) in job.skills" :key="i" class="px-3 py-1 bg-cyan-900/20 text-cyan-400 border border-cyan-900/30 hover:bg-cyan-400/20 transition-colors duration-300">
                      {{ skill }}
                    </span>
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
      jobs: [
        {
          title: 'FULL STACK WEB DEVELOPER',
          company: 'H.R.D Singapore Pte Ltd',
          period: 'September 2021 - Present',
          current: true,
          skills: ['JavaScript', 'SQL', 'HTML', 'Vue.js', 'Node.js', 'Express.js', 'Laravel', 'MongoDB'],
          tasks: [
            'Used JavaScript, SQL and HTML to develop app-solutions',
            'Increased website performance by optimizing front-end and back-end code',
            'Created easy-to-use APIs for third-party integrations',
            'Provided technical mentorship to junior developers',
            'Improved monitoring systems for system stability and data quality',
            'Served as instructor of Node.Js and JavaScript Development courses',
            'Developed customized content management systems',
            'Handled front-end tasks with Vue, Vuetify2, Vuetify 3',
            'Developed server-side applications using Node.JS, Express JS and Laravel 8-9'
          ]
        },
        {
          title: 'FULL STACK WEB DEVELOPER',
          company: 'GLOBAL SOFTWARE SOLUTION INC.',
          period: 'September 2023 - March 2024',
          skills: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB'],
          tasks: [
            'Developed and maintained web applications',
            'Collaborated with cross-functional teams',
            'Implemented best practices for software development'
          ]
        },
        {
          title: 'DATA ENCODER',
          company: 'Sapphire Laundry Industry Inc.',
          period: 'April 2019 - March 2020',
          skills: ['Data Entry', 'Database Management', 'Quality Assurance'],
          tasks: [
            'Supported team members with data encoding best practices',
            'Extracted information from databases for audit reports',
            'Prepared source data for computer entry',
            'Reduced errors through quality checks'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Enhanced glass effect without rounded corners */
.glass-effect {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform-style: preserve-3d;
  transform: translateZ(0);
}
.glass-effect::before {
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
.glass-effect:hover::before {
  transform: translateX(100%);
}
.glass-effect:hover {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 8px 30px rgba(0, 212, 255, 0.2);
  transform: translateY(-2px) translateZ(20px);
}

/* Enhanced Timeline Dot */
.timeline-dot {
  @apply flex items-center justify-center;
  border-radius: 0;
}
.timeline-dot-enhanced {
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}
.timeline-dot-enhanced:hover {
  transform: translateX(-50%) scale(1.2) translateZ(20px);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
}

/* Mobile-specific styles for timeline */
@media (max-width: 767px) {
  .timeline-dot {
    display: none;
  }
  
  .card {
    margin-left: 0;
  }
  
  /* Adjust spacing for mobile */
  .mb-16 {
    margin-bottom: 2rem;
  }
}

/* Tablet-specific styles */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Adjust spacing for tablet */
  .md\:mb-20 {
    margin-bottom: 3rem;
  }
}

/* Animation for current position indicator */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.animate-pulse {
  animation: pulse 2s infinite;
}

/* Card enhancements */
.card {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform-style: preserve-3d;
  transform: translateZ(0);
}
.card::before {
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
.card:hover::before {
  transform: translateX(100%);
}
.card:hover {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 8px 30px rgba(0, 212, 255, 0.2);
  transform: translateY(-2px) translateZ(20px);
}

/* Skill tags without rounded corners */
span.px-3.py-1 {
  border-radius: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}
span.px-3.py-1::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(0, 212, 255, 0.2);
  transition: left 0.3s ease;
}
span.px-3.py-1:hover::before {
  left: 100%;
}
span.px-3.py-1:hover {
  transform: scale(1.05) translateZ(10px);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}
</style>