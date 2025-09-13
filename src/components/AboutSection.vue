<template>
  <section id="about" class="section-padding gradient-bg relative overflow-hidden section-transition">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    <div class="about-bg-pattern"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 animate-on-scroll fade-in-up">
        <h2 class="section-title">ABOUT ME</h2>
      </div>
      
      <div class="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div class="lg:w-1/2 animate-on-scroll fade-in-left">
          <div class="card card-enhanced hover-glow-enhanced hover-3d">
            <h3 class="text-2xl font-bold text-white mb-6" style="font-family: 'Orbitron', sans-serif;">PROFESSIONAL SUMMARY</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Adept Full Stack Web Developer with a proven track record at Past Companies, enhancing app functionality and system stability through expert API integration and robust coding in JavaScript and SQL. Mentored junior developers, fostering professional growth. Demonstrates strong debugging skills and a commitment to continuous learning and improvement.
            </p>
            
            <h3 class="text-2xl font-bold text-white mb-6" style="font-family: 'Orbitron', sans-serif;">CORE COMPETENCIES</h3>
            <div class="flex flex-wrap gap-3 stagger-children">
              <span 
                v-for="(skill, index) in skills" 
                :key="skill" 
                class="skill-tag skill-tag-enhanced"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2 grid grid-cols-2 gap-6 animate-on-scroll fade-in-right">
          <div 
            v-for="(skill, index) in skillCards" 
            :key="index" 
            class="card card-enhanced hover-glow-enhanced hover-3d"
          >
            <div class="bg-cyan-400 text-gray-900 w-12 h-12 flex items-center justify-center mb-4 transform transition duration-500 hover:rotate-12">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2" style="font-family: 'Orbitron', sans-serif;">{{ skill.title }}</h3>
            <p class="text-gray-400">{{ skill.description }}</p>
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
      skills: [
        'API Integration', 'Express.js', 'Frontend Frameworks', 'RESTful APIs',
        'Programming Languages', 'Object Oriented Programming', 'Debugging',
        'Database Programming', 'Node.js', 'SQL', 'MongoDB', 'Tailwind CSS'
      ],
      skillCards: [
        {
          title: 'FRONTEND',
          description: 'Vue.js, Vuetify 2 & 3, HTML, Tailwind CSS'
        },
        {
          title: 'BACKEND',
          description: 'Node.js, Express.js, Laravel, RESTful APIs'
        },
        {
          title: 'DATABASE',
          description: 'SQL, MongoDB, phpMyAdmin, CouchDB'
        },
        {
          title: 'OTHER SKILLS',
          description: 'API Integration, OOP, Debugging, Mentoring'
        }
      ]
    }
  }
}
</script>