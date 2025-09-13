<template>
  <section id="experience" class="section-padding gradient-bg relative overflow-hidden section-transition">
    <!-- Optimized Background elements -->
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 slide-up">
        <h2 class="section-title">EXPERIENCE</h2>
      </div>
      
      <div class="relative max-w-4xl mx-auto">
        <div class="timeline-line"></div>
        
        <div 
          v-for="(job, index) in jobs" 
          :key="index" 
          class="mb-12" 
          :class="index % 2 === 0 ? 'slide-left' : 'slide-right'" 
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
              <h3 class="text-2xl font-bold text-white" style="font-family: 'Orbitron', sans-serif;">{{ job.title }}</h3>
              <h4 class="text-xl text-cyan-400 mb-2">{{ job.company }}</h4>
              <p class="text-gray-400">{{ job.period }}</p>
            </div>
            
            <div class="timeline-dot timeline-dot-enhanced">
              <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            
            <div class="md:w-1/2 md:pl-8">
              <div class="card card-enhanced hover-glow-enhanced hover-3d">
                <ul class="space-y-2">
                  <li v-for="(task, i) in job.tasks" :key="i" class="flex items-start">
                    <svg class="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-300">{{ task }}</span>
                  </li>
                </ul>
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