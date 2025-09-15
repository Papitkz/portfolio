<template>
  <section id="about" class="section-padding gradient-bg relative overflow-hidden section-transition">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    <div class="about-bg-pattern"></div>
    
    <!-- Geometric shapes for visual interest -->
    <div class="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20 transform rotate-45"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 border-r-2 border-b-2 border-purple-500/20 transform rotate-45"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 animate-on-scroll fade-in-up">
        <h2 class="section-title">ABOUT ME</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4">Get to know me better - my skills, experience, and what drives me as a developer</p>
      </div>
      
      <div class="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div class="lg:w-1/2 animate-on-scroll fade-in-left">
          <div class="glass-card glass-hover p-8">
            <div class="glass-reflection"></div>
            <!-- Corner accent -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
            
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center" style="font-family: 'Orbitron', sans-serif;">
              <div class="bg-cyan-400 text-gray-900 w-10 h-10 flex items-center justify-center mr-3 transform rotate-45">
                <svg class="w-5 h-5 text-gray-900 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              PROFESSIONAL SUMMARY
            </h3>
            <p class="text-gray-300 mb-8 leading-relaxed">
              Adept Full Stack Web Developer with a proven track record at Past Companies, enhancing app functionality and system stability through expert API integration and robust coding in JavaScript and SQL. Mentored junior developers, fostering professional growth. Demonstrates strong debugging skills and a commitment to continuous learning and improvement.
            </p>
            
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center" style="font-family: 'Orbitron', sans-serif;">
              <div class="bg-cyan-400 text-gray-900 w-10 h-10 flex items-center justify-center mr-3 transform rotate-45">
                <svg class="w-5 h-5 text-gray-900 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              TECHNICAL SKILLS
            </h3>
            
            <div class="space-y-6">
              <div 
                v-for="(skill, index) in skills" 
                :key="skill.name" 
                class="skill-item animate-on-scroll fade-in-up"
                :style="{ 'animation-delay': `${index * 0.1}s` }"
              >
                <div class="flex justify-between mb-2">
                  <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-cyan-400 font-bold">{{ skill.percentage }}%</span>
                </div>
                <div class="w-full bg-gray-800 h-2.5">
                  <div 
                    class="skill-bar bg-gradient-to-r from-cyan-400 to-purple-500 h-2.5" 
                    :style="{ width: '0%' }"
                    :data-width="skill.percentage + '%'"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2 grid grid-cols-2 gap-6 animate-on-scroll fade-in-right">
          <div 
            v-for="(skill, index) in skillCards" 
            :key="index" 
            class="glass-card glass-hover p-6"
            :style="{ 'animation-delay': `${index * 0.2}s` }"
          >
            <div class="glass-reflection"></div>
            <!-- Corner accent -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
            
            <div class="bg-gradient-to-br from-cyan-400 to-cyan-600 text-gray-900 w-12 h-12 flex items-center justify-center mb-4 transform transition duration-500 hover:rotate-12 hover:scale-110">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3" style="font-family: 'Orbitron', sans-serif;">{{ skill.title }}</h3>
            <p class="text-gray-400">{{ skill.description }}</p>
          </div>
          
          <!-- Full Stack Developer Badge -->
          <div class="col-span-2 glass-card glass-hover p-6 mt-4 animate-on-scroll zoom-in" style="animation-delay: 0.8s">
            <div class="glass-reflection"></div>
            <!-- Corner accent -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
            
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-6">
                <div class="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center transform rotate-45">
                  <svg class="w-12 h-12 text-gray-900 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <div class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-8 h-8 flex items-center justify-center animate-pulse">
                  PRO
                </div>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2" style="font-family: 'Orbitron', sans-serif;">FULL STACK DEVELOPER</h3>
              <p class="text-gray-400 mb-4">Specializing in modern web technologies</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Express.js</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">Tailwind CSS</span>
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
      skills: [
        { name: 'Frontend Development', percentage: 90 },
        { name: 'Backend Development', percentage: 85 },
        { name: 'API Integration', percentage: 95 },
        { name: 'Database Management', percentage: 80 },
        { name: 'UI/UX Design', percentage: 75 },
        { name: 'DevOps & Deployment', percentage: 70 }
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
  },
  mounted() {
    // Animate skill bars when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = width;
              bar.style.transition = 'width 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }, 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const skillSection = document.querySelector('#about');
    if (skillSection) {
      observer.observe(skillSection);
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

/* Skill Bar Animation */
.skill-bar {
  position: relative;
  overflow: hidden;
}
.skill-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
  animation: shimmer 2s infinite;
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Skill tag styles */
.skill-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 212, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.skill-tag::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(0, 212, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}
.skill-tag:hover::before {
  width: 100%;
  height: 100%;
}
.skill-tag:hover {
  background: rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.4);
  color: white;
  transform: scale(1.05);
}

/* Full Stack Badge Animation */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.animate-pulse {
  animation: pulse 2s infinite;
}
</style>