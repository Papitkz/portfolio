<template>
  <section id="projects" class="section-padding gradient-bg relative overflow-hidden section-transition">
    <!-- Optimized Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <!-- Geometric shapes for visual interest -->
    <div class="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20 transform rotate-45"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 border-r-2 border-b-2 border-purple-500/20 transform rotate-45"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 animate-on-scroll fade-in-up">
        <h2 class="section-title">PROJECTS</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4">Explore my portfolio of projects showcasing my technical expertise and problem-solving skills</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title" 
          class="project-card glass-card glass-hover animate-on-scroll zoom-in" 
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="glass-reflection"></div>
          <!-- Corner accent -->
          <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
          <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
          
          <div class="relative overflow-hidden h-48 group">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Tech stack badges -->
            <div class="absolute top-3 right-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span v-for="(tech, i) in project.techStack.slice(0, 3)" :key="i" 
                    class="px-2 py-1 bg-cyan-900/80 text-cyan-300 text-xs font-bold">
                {{ tech }}
              </span>
              <span v-if="project.techStack.length > 3" 
                    class="px-2 py-1 bg-purple-900/80 text-purple-300 text-xs font-bold">
                +{{ project.techStack.length - 3 }}
              </span>
            </div>
            
            <!-- View project button -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex gap-3">
                <a :href="project.link" target="_blank" class="px-4 py-2 bg-cyan-500 text-gray-900 font-medium rounded transform transition-all duration-300 hover:bg-cyan-400 hover:scale-105">
                  <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  View
                </a>
                <a :href="project.github" target="_blank" class="px-4 py-2 bg-gray-800 text-cyan-400 font-medium rounded transform transition-all duration-300 hover:bg-gray-700 hover:scale-105">
                  <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mr-3 transform rotate-45">
                <svg class="w-4 h-4 text-gray-900 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86-.517L6.05 14.9a2 2 0 00-1.022.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white" style="font-family: 'Orbitron', sans-serif;">{{ project.title }}</h3>
            </div>
            <p class="text-gray-400 mb-6">{{ project.description }}</p>
            
            <!-- Project stats -->
            <div class="flex justify-between mt-4 pt-4 border-t border-gray-800">
              <div class="flex items-center text-gray-400 text-sm">
                <svg class="w-4 h-4 mr-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                {{ project.views || Math.floor(Math.random() * 1000) }}
              </div>
              <div class="flex items-center text-gray-400 text-sm">
                <svg class="w-4 h-4 mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                {{ project.likes || Math.floor(Math.random() * 100) }}
              </div>
              <div class="flex items-center text-gray-400 text-sm">
                <svg class="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                {{ project.comments || Math.floor(Math.random() * 50) }}
              </div>
            </div>
          </div>
          
          <!-- Project tags -->
          <div class="px-6 pb-6">
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, i) in project.tags" :key="i" class="project-tag">
                {{ tag }}
              </span>
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
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'Full-featured online store with payment integration and inventory management',
          image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          link: '#',
          github: '#',
          techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
          tags: ['E-commerce', 'Payment', 'Inventory'],
          views: 1242,
          likes: 87,
          comments: 23
        },
        {
          title: 'Task Management App',
          description: 'Collaborative task management with real-time updates and team collaboration',
          image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          link: '#',
          github: '#',
          techStack: ['React', 'Firebase', 'Tailwind CSS', 'WebSockets'],
          tags: ['Productivity', 'Real-time', 'Collaboration'],
          views: 856,
          likes: 64,
          comments: 18
        },
        {
          title: 'Weather Dashboard',
          description: 'Real-time weather data visualization with interactive maps and forecasts',
          image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          link: '#',
          github: '#',
          techStack: ['JavaScript', 'API Integration', 'Chart.js', 'Geolocation'],
          tags: ['Weather', 'Data Visualization', 'Maps'],
          views: 2103,
          likes: 142,
          comments: 37
        },
      ],
    }
  },
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
/* Project card specific styles */
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* Project button styles */
.project-btn {
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
.project-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent);
  transition: left 0.5s ease;
}
.project-btn:hover::before {
  left: 100%;
}
.project-btn:hover {
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 255, 0.2));
  border-color: rgba(0, 212, 255, 0.5);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}
/* Project tag styles */
.project-tag {
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
.project-tag::before {
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
.project-tag:hover::before {
  width: 100%;
  height: 100%;
}
.project-tag:hover {
  background: rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.4);
  color: white;
  transform: scale(1.05);
}
</style>