<template>
  <section id="home" class="min-h-screen flex items-center gradient-bg text-white relative overflow-hidden section-transition">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <!-- Music Visualizer -->
    <MusicVisualizer :isPlaying="isMusicPlaying" />
    
    <!-- Animated particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 10" :key="i" class="home-particle" 
           :style="{
             animationDelay: `${i * 0.5}s`,
             left: `${Math.random() * 100}%`,
             animationDuration: `${8 + Math.random() * 8}s`
           }"></div>
    </div>
    
    <!-- Floating tech icons -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="(icon, index) in techIcons" :key="index" 
           class="absolute tech-icon floating-element"
           :style="{
             top: `${10 + Math.random() * 80}%`,
             left: `${5 + Math.random() * 90}%`,
             animationDelay: `${index * 0.5}s`,
             opacity: 0.03 + Math.random() * 0.07
           }">
        <!-- <component :is="icon.component" class="w-16 h-16 md:w-24 md:h-24" /> -->
      </div>
    </div>
    
    <!-- Circuit lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        <path class="circuit-line" d="M0,400 Q300,200 600,400 T1200,400" stroke="rgba(0, 212, 255, 0.3)" stroke-width="1" fill="none"/>
        <path class="circuit-line" d="M0,600 Q300,400 600,600 T1200,600" stroke="rgba(255, 0, 255, 0.3)" stroke-width="1" fill="none"/>
        <circle class="circuit-node" cx="300" cy="300" r="4" fill="#00d4ff"/>
        <circle class="circuit-node" cx="600" cy="400" r="4" fill="#00d4ff"/>
        <circle class="circuit-node" cx="900" cy="500" r="4" fill="#ff00ff"/>
      </svg>
    </div>
    
    <!-- Binary rain -->
    <div class="binary-rain">
      <span v-for="i in 10" :key="i" class="binary-digit" :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 10}s`
      }">{{ Math.random() > 0.5 ? '1' : '0' }}</span>
    </div>
    
    <!-- Geometric shapes -->
    <div class="geometric-shape shape-triangle floating-element" style="top: 15%; left: 8%; animation-delay: 1s;"></div>
    <div class="geometric-shape shape-hexagon floating-element" style="top: 75%; right: 12%; animation-delay: 3s;"></div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center min-h-screen">
        <div class="w-full lg:w-1/2 mb-10 lg:mb-0 animate-on-scroll fade-in-up py-20 lg:py-0">
          <div class="mb-2 flex items-center">
          
          </div>
            
          <h1 class="glitch text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6" data-text="JOHN FRITZ IZAR">JOHN FRITZ IZAR</h1>
          <h2 class="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 text-cyan-400" style="font-family: 'Orbitron', sans-serif; letter-spacing: 1px sm:letter-spacing: 2px;">
            <span class="typing-text">{{ currentText }}</span>
            <span class="cursor">|</span>
          </h2>
          <div class="h-1 w-10 bg-cyan-400 mr-3"></div>
            <span class="text-cyan-400 font-mono text-sm tracking-wider">FULL STACK DEVELOPER</span>
          <p class="text-base sm:text-lg mb-8 sm:mb-10 max-w-lg text-gray-300 leading-relaxed">
            Passionate Full Stack Developer with expertise in modern web technologies. I transform ideas into scalable, high-performance applications with clean code and intuitive user experiences.
          </p>
          
          <div class="flex flex-wrap gap-4 mb-10">
            <a href="#experience" class="btn btn-enhanced btn-primary text-sm sm:text-base px-6 py-3 flex items-center glass-hover">
              <span>View Experience</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
            <a href="#contact" class="btn btn-enhanced btn-outline text-sm sm:text-base px-6 py-3 flex items-center glass-hover">
              <span>Contact Me</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
            <a href="#" @click.prevent="downloadCV" class="btn btn-enhanced btn-primary text-sm sm:text-base px-6 py-3 flex items-center glass-hover">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download CV
            </a>
          </div>
          
          <!-- Animated Stats Section -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-10">
            <div class="digit-card animate-on-scroll fade-in-up glass-depth" style="animation-delay: 0.1s">
              <div class="digit-container">
                <span class="home-digit digit-animate" data-target="4" data-duration="2000">0</span>
                <span class="digit-separator">+</span>
              </div>
              <div class="digit-label">YEARS EXPERIENCE</div>
            </div>
            
            <div class="digit-card animate-on-scroll fade-in-up glass-depth" style="animation-delay: 0.2s">
              <div class="digit-container">
                <span class="home-digit digit-animate" data-target="4" data-duration="2000">0</span>
                <span class="digit-separator">+</span>
              </div>
              <div class="digit-label">PROJECTS</div>
            </div>
            
            <div class="digit-card animate-on-scroll fade-in-up glass-depth" style="animation-delay: 0.3s">
              <div class="digit-container">
                <span class="home-digit digit-animate" data-target="3" data-duration="2000">0</span>
                <span class="digit-separator">+</span>
              </div>
              <div class="digit-label">HAPPY CLIENTS</div>
            </div>
            
            <div class="digit-card animate-on-scroll fade-in-up glass-depth" style="animation-delay: 0.4s">
              <div class="digit-container">
                <span class="home-digit digit-animate" data-target="9" data-duration="2000">0</span>
                <span class="digit-separator">+</span>
              </div>
              <div class="digit-label">Web System</div>
            </div>
          </div>
          
          <div class="mt-10 animate-on-scroll fade-in-up" style="animation-delay: 0.4s">
            <h3 class="text-lg font-semibold text-gray-400 mb-4">TECHNICAL EXPERTISE</h3>
            <div class="flex flex-wrap gap-3">
              <div v-for="(skill, index) in primarySkills" :key="skill" 
                   class="skill-tag-wrapper"
                   @mouseenter="hoveredSkill = skill"
                   @mouseleave="hoveredSkill = null">
                <span class="skill-tag skill-tag-enhanced glass-hover animate-on-scroll fade-in-up"
                      :style="{ 'animation-delay': `${0.5 + index * 0.1}s` }">
                  {{ skill }}
                </span>
                <div v-if="hoveredSkill === skill" class="skill-tooltip">
                  <div class="skill-tooltip-content">
                    <h4>{{ skill }}</h4>
                    <p>{{ skillDetails[skill] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 flex justify-center animate-on-scroll fade-in-up" style="animation-delay: 0.2s">
          <div class="relative">
            <!-- Profile image with enhanced glass effect -->
            <div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden glass-card float-animation glass-depth">
              <div class="glass-reflection"></div>
              <img src="../assets/fritz3.png" alt="Profile" class="w-full h-full object-cover">
              
              <!-- Animated border -->
              <div class="absolute inset-0 border-4 border-transparent animate-border">
                <div class="absolute inset-0 border-4 border-transparent animate-border-inner"></div>
              </div>
            </div>
            
            <!-- Status badge -->
            <div class="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-gradient-to-br from-cyan-400 to-cyan-600 text-gray-900 p-3 sm:p-4 glass-effect">
              <div class="glass-reflection"></div>
              <div class="flex items-center">
                <div class="relative">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <div class="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <!-- Social links -->
            <div class="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 flex space-x-2">
              <a href="https://github.com" target="_blank" class="social-icon glass-effect p-3">
                <div class="glass-reflection"></div>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" class="social-icon glass-effect p-3">
                <div class="glass-reflection"></div>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="scroll-indicator hidden sm:block glass-hover">
        <div class="glass-reflection"></div>
        <svg class="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
    
    <!-- Code Snippet (Now on left side with toggle) -->
    <!-- <CodeSnippet /> -->
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import CodeSnippet from './CodeSnippet.vue';
import MusicVisualizer from './MusicVisualizer.vue';
// Tech icons components
const VueIcon = {
  template: `<svg viewBox="0 0 128 128" fill="none"><path d="M2 58.6L66.2 2.1c1.1-1 2.8-1 3.9 0l56 50.6c1.5 1.4 1.5 3.8 0 5.2l-56 50.6c-1.1 1-2.8 1-3.9 0L2 63.8c-1.5-1.4-1.5-3.8 0-5.2z" fill="#41B883"/><path d="M125.1 58.6L64.2 5.1c-1.1-1-2.8-1-3.9 0L2 58.6c-1.5 1.4-1.5 3.8 0 5.2l58.3 53.5c1.1 1 2.8 1 3.9 0l61-56.5c1.5-1.4 1.5-3.8 0-5.2z" fill="#34495E"/></svg>`
};
const NodeIcon = {
  template: `<svg viewBox="0 0 128 128" fill="none"><path d="M115.4 30.7l-48.3-27.8c-.4-.2-.9-.2-1.3 0L17.6 30.7c-.4.2-.6.7-.6 1.1v54.4c0 .4.2.9.6 1.1l48.3 27.9c.4.2.9.2 1.3 0l48.3-27.9c.4-.2-.6-.7-.6-1.1z" fill="#689F63"/><path d="M115.4 30.7l-48.3-27.8c-.4-.2-.9-.2-1.3 0L17.6 30.7c-.4.2-.6.7-.6 1.1v54.4c0 .4.2.9.6 1.1l48.3 27.9c.4-.2-.6-.7-.6-1.1z" fill="#333" opacity=".2"/></svg>`
};
const JsIcon = {
  template: `<svg viewBox="0 0 128 128" fill="none"><path d="M2 58.6L66.2 2.1c1.1-1 2.8-1 3.9 0l56 50.6c1.5 1.4 1.5 3.8 0 5.2l-56 50.6c-1.1 1-2.8 1-3.9 0L2 63.8c-1.5-1.4-1.5-3.8 0-5.2z" fill="#F7DF1E"/><path d="M125.1 58.6L64.2 5.1c-1.1-1-2.8-1-3.9 0L2 58.6c-1.5 1.4-1.5 3.8 0 5.2l58.3 53.5c1.1 1 2.8 1 3.9 0l61-56.5c1.5-1.4 1.5-3.8 0-5.2z" fill="#333" opacity=".2"/></svg>`
};

export default {
  components: {
    CodeSnippet,
    MusicVisualizer
  },
  props: {
    isMusicPlaying: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    downloadCV() {
      // Create a link element
      const link = document.createElement('a');
      
      // Set the href to your CV file
      link.href = '../assets/JohnFritzIzar_Resume.pdf';
      
      // Set the download attribute with a filename
      link.download = 'JohnFritzIzar_Resume.pdf';
      
      // Append the link to the body
      document.body.appendChild(link);
      
      // Trigger the click event
      link.click();
      
      // Remove the link from the body
      document.body.removeChild(link);
    },
    typeText() {
      const fullText = this.typingTexts[this.currentTextIndex];
      
      if (this.isDeleting) {
        this.currentText = fullText.substring(0, this.currentText.length - 1);
      } else {
        this.currentText = fullText.substring(0, this.currentText.length + 1);
      }
      
      let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      
      if (!this.isDeleting && this.currentText === fullText) {
        typeSpeed = this.pauseDuration;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentText === '') {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.typingTexts.length;
        typeSpeed = 500;
      }
      
      setTimeout(() => this.typeText(), typeSpeed);
    },
    initDigitAnimations() {
      const digitElements = document.querySelectorAll('.home-digit');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const targetValue = parseInt(element.getAttribute('data-target'));
            const duration = parseInt(element.getAttribute('data-duration')) || 2000;
            
            let startValue = 0;
            const increment = targetValue / (duration / 16);
            
            const updateCounter = () => {
              startValue += increment;
              if (startValue < targetValue) {
                element.textContent = Math.ceil(startValue);
                requestAnimationFrame(updateCounter);
              } else {
                element.textContent = targetValue;
              }
            };
            
            updateCounter();
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.5
      });
      
      digitElements.forEach(element => {
        observer.observe(element);
      });
    }
  },
  data() {
    return {
      primarySkills: [
        'Vue.js', 'Node.js', 'JavaScript', 'Express.js', 
        'MongoDB', 'SQL', 'Tailwind CSS', 'API Integration'
      ],
      skillDetails: {
        'Vue.js': 'Progressive JavaScript framework for building user interfaces with reactive data binding and composable components.',
        'Node.js': 'JavaScript runtime built on Chrome\'s V8 engine for building fast and scalable network applications.',
        'JavaScript': 'Versatile programming language that enables interactive web pages and server-side development.',
        'Express.js': 'Minimal and flexible Node.js web application framework providing robust features for web and mobile applications.',
        'MongoDB': 'Cross-platform document-oriented NoSQL database program using JSON-like documents with optional schemas.',
        'SQL': 'Domain-specific language used in programming and designed for managing data held in relational databases.',
        'Tailwind CSS': 'Utility-first CSS framework for rapidly building custom designs without leaving your HTML.',
        'API Integration': 'Process of connecting different software applications through their APIs to exchange data and functionality.'
      },
      hoveredSkill: null,
      techIcons: [
        { component: VueIcon },
        { component: NodeIcon },
        { component: JsIcon },
        { component: VueIcon },
        { component: NodeIcon },
        { component: JsIcon },
      ],
      typingTexts: [
        'CRAFTING DIGITAL EXPERIENCES',
        'BUILDING SCALABLE APPLICATIONS',
        'SOLVING COMPLEX PROBLEMS'
      ],
      currentTextIndex: 0,
      currentText: '',
      isDeleting: false,
      typingSpeed: 100,
      deletingSpeed: 50,
      pauseDuration: 2000
    }
  },
  mounted() {
    this.typeText();
    this.initDigitAnimations();
  }
}
</script>

<style scoped>
/* Enhanced glass effect for the entire section */
#home {
  position: relative;
}
#home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.05) 0%, transparent 50%);
  z-index: 0;
  pointer-events: none;
}

/* Enhanced background when music is playing */
#home.music-playing::before {
  background: radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.15) 0%, transparent 50%);
  animation: background-pulse 4s infinite alternate;
}

@keyframes background-pulse {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

/* Animated tech icons */
.tech-icon {
  animation: float-tech 20s infinite ease-in-out;
  filter: blur(1px);
}
@keyframes float-tech {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -15px) rotate(5deg); }
  50% { transform: translate(5px, 10px) rotate(-5deg); }
  75% { transform: translate(-10px, 5px) rotate(3deg); }
}

/* Responsive adjustments for glitch text */
.glitch {
  position: relative;
  color: white;
  font-size: clamp(2rem, 5vw, 4rem);
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  transform-style: preserve-3d;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.glitch::before {
  animation: glitch-1 0.5s infinite;
  color: #00ffff;
  z-index: -1;
}
.glitch::after {
  animation: glitch-2 0.5s infinite;
  color: #ff00ff;
  z-index: -2;
}
.glitch {
  margin-top: 4rem; /* Add this line or adjust the value */
}

@keyframes glitch-1 {
  0%, 14%, 15%, 49%, 50%, 99%, 100% {
    transform: translate(0);
  }
  15%, 49% {
    transform: translate(-2px, 2px);
  }
}
@keyframes glitch-2 {
  0%, 20%, 21%, 62%, 63%, 99%, 100% {
    transform: translate(0);
  }
  21%, 62% {
    transform: translate(2px, -2px);
  }
}

/* Typing text effect */
.typing-text {
  border-right: 2px solid #00d4ff;
  padding-right: 5px;
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: #00d4ff; }
}

/* Enhanced profile image container */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform-style: preserve-3d;
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
  transform: translateY(-5px) rotateX(5deg) translateZ(20px);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.3);
  border-color: rgba(0, 212, 255, 0.5);
}

/* Animated border effect */
.animate-border {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(45deg, #00d4ff, #ff00ff, #00d4ff);
  background-size: 400% 400%;
  z-index: -1;
  animation: gradient-border 3s ease infinite;
  border-radius: 0;
}
.animate-border-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0;
  background: #0a0a0a;
}
@keyframes gradient-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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
  border-radius: inherit;
}
.glass-hover:hover .glass-reflection {
  opacity: 1;
}

/* Enhanced skill tags */
.skill-tag-wrapper {
  position: relative;
  display: inline-block;
}

.skill-tag-enhanced {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transform-style: preserve-3d;
  cursor: pointer;
  z-index: 1;
}
.skill-tag-enhanced::before {
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
.skill-tag-enhanced:hover::before {
  width: 100%;
  height: 100%;
}
.skill-tag-enhanced:hover {
  transform: scale(1.05) translateZ(20px);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}

/* Skill Tooltip */
.skill-tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 12px;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.skill-tag-wrapper:hover .skill-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-5px);
}

.skill-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: rgba(0, 212, 255, 0.3) transparent transparent transparent;
}

.skill-tooltip-content {
  position: relative;
}

.skill-tooltip-content h4 {
  color: #00d4ff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skill-tooltip-content p {
  color: #e0e0e0;
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.4;
}

/* Enhanced buttons */
.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  transform-style: preserve-3d;
}
.btn-enhanced {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.btn-primary {
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 255, 0.2));
  border: 1px solid rgba(0, 212, 255, 0.3);
}
.btn-outline {
  background: transparent;
  border: 1px solid rgba(0, 212, 255, 0.5);
}
.btn:hover {
  transform: translateY(-3px) translateZ(20px);
  box-shadow: 0 10px 20px rgba(0, 212, 255, 0.2);
}

/* Enhanced particles */
.home-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00d4ff;
  border-radius: 0;
  pointer-events: none;
  opacity: 0;
  animation: home-particle-float var(--duration, 8s) infinite linear;
}
@keyframes home-particle-float {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
 10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

/* Enhanced Digit Animations - Home specific */
.home-digit {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
  font-size: 3rem;
}
.home-digit::before {
  content: attr(data-target);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff00ff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}
.home-digit:hover::before {
  opacity: 1;
  transform: translateY(0);
}
.home-digit:hover {
  transform: translateY(-5px) translateZ(20px);
  text-shadow: 0 5px 15px rgba(0, 212, 255, 0.5);
}

/* Enhanced Digit Container */
.digit-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.digit-container .digit {
  display: inline-block;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  transition: all 0.3s ease;
  animation: digitPulse 2s infinite alternate;
}
.digit-container .digit:nth-child(odd) {
  animation-delay: 0.1s;
}
.digit-container .digit:nth-child(even) {
  animation-delay: 0.2s;
}
@keyframes digitPulse {
  0% {
    transform: translateY(0) scale(1);
    text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
  }
  100% {
    transform: translateY(-5px) scale(1.05);
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
  }
}
.digit-container .digit:hover {
  transform: translateY(-10px) scale(1.1) translateZ(20px);
  text-shadow: 0 10px 25px rgba(0, 212, 255, 0.8);
}
.digit-container .digit::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00d4ff, #ff00ff);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.digit-container .digit:hover::after {
  transform: scaleX(1);
}

/* Enhanced Digit Separator */
.digit-separator {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #00d4ff;
  margin: 0 0.2rem;
  animation: separatorPulse 2s infinite alternate;
}
@keyframes separatorPulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Enhanced Digit Label */
.digit-label {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #a0a0a0;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}
.digit-container:hover + .digit-label {
  color: #00d4ff;
}

/* Enhanced Digit Card */
.digit-card {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform-style: preserve-3d;
}
.digit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.digit-card:hover::before {
  opacity: 1;
}
.digit-card:hover {
  transform: translateY(-10px) translateZ(20px);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
  border-color: rgba(0, 212, 255, 0.5);
}

/* Responsive adjustments for the profile image container */
@media (max-width: 1024px) {
  .float-animation {
    animation: float 6s ease-in-out infinite;
  }
}
@media (max-width: 768px) {
  .float-animation {
    animation: float 8s ease-in-out infinite;
  }
}
@media (max-width: 640px) {
  .float-animation {
    animation: float 10s ease-in-out infinite;
  }
  
  .home-digit {
    font-size: 2rem;
  }
  
  .digit-separator {
    font-size: 1.8rem;
  }
  
  .digit-card {
    padding: 1.5rem;
  }
  
  .skill-tooltip {
    width: 200px;
    padding: 10px;
  }
  
  .skill-tooltip-content h4 {
    font-size: 0.875rem;
  }
  
  .skill-tooltip-content p {
    font-size: 0.75rem;
  }
}

/* Hide scroll indicator on small screens */
@media (max-width: 640px) {
  .scroll-indicator {
    display: none;
  }
}

/* Enhanced music visualizer integration */
.music-visualizer-enhanced {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.6;
  mix-blend-mode: screen;
}

/* When music is playing, enhance all elements */
.music-playing .glitch {
  text-shadow: 
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(255, 0, 255, 0.8);
}

.music-playing .glass-card {
  box-shadow: 
    0 0 30px rgba(0, 212, 255, 0.4),
    0 0 60px rgba(255, 0, 255, 0.4);
}

.music-playing .home-particle {
  background: radial-gradient(circle, #00d4ff, #ff00ff);
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
}

.music-playing .circuit-line {
  stroke-width: 2;
  filter: drop-shadow(0 0 5px rgba(0, 212, 255, 0.8));
}

.music-playing .circuit-node {
  r: 6;
  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.8));
}
</style>