<template>
  <section id="contact" class="section-padding gradient-bg relative overflow-hidden section-transition pro-section">
    <!-- Enhanced Background elements -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <!-- Contact Form Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5"></div>
    
    <!-- Geometric shapes for visual interest -->
    <div class="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20 transform rotate-45"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 border-r-2 border-b-2 border-purple-500/20 transform rotate-45"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="section-title">GET IN TOUCH</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
      </div>
      
      <div class="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        <div class="lg:w-1/2 scroll-reveal-left">
          <form @submit.prevent="submitForm" class="contact-form glass-card glass-hover">
            <div class="glass-reflection"></div>
            <!-- Corner accent -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
            
            <h3 class="text-2xl font-bold text-white mb-6" style="font-family: 'Orbitron', sans-serif;">SEND MESSAGE</h3>
            
            <div class="form-group">
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                class="form-input"
                placeholder=" "
                required
              >
              <label for="name" class="form-label">YOUR NAME</label>
            </div>
            
            <div class="form-group">
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="form-input"
                placeholder=" "
                required
              >
              <label for="email" class="form-label">EMAIL ADDRESS</label>
            </div>
            
            <div class="form-group">
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                class="form-input"
                placeholder=" "
                required
              >
              <label for="subject" class="form-label">SUBJECT</label>
            </div>
            
            <div class="form-group">
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5" 
                class="form-input resize-none"
                placeholder=" "
                required
              ></textarea>
              <label for="message" class="form-label">YOUR MESSAGE</label>
            </div>
            
            <button type="submit" class="btn btn-enhanced btn-primary w-full">
              <span v-if="!isSubmitting">SEND MESSAGE</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SENDING...
              </span>
            </button>
          </form>
        </div>
        
        <div class="lg:w-1/2 scroll-reveal-right">
          <div class="contact-info-card glass-card glass-hover">
            <div class="glass-reflection"></div>
            <!-- Corner accent -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
            
            <h3 class="text-2xl font-bold text-white mb-6" style="font-family: 'Orbitron', sans-serif;">CONTACT INFORMATION</h3>
            
            <div class="space-y-6">
              <div class="flex items-start group">
                <div class="bg-cyan-400 text-gray-900 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 transform transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">NAME</h4>
                  <p class="text-gray-400">John Fritz Izar</p>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="bg-cyan-400 text-gray-900 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 transform transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">PHONE</h4>
                  <a href="tel:+639564874933" class="text-gray-400 hover:text-cyan-400 transition-colors">+63 956 487 4933</a>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="bg-cyan-400 text-gray-900 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 transform transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">EMAIL</h4>
                  <a href="mailto:johnfritzizar35@gmail.com" class="text-gray-400 hover:text-cyan-400 transition-colors">johnfritzizar35@gmail.com</a>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="bg-cyan-400 text-gray-900 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 transform transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">LOCATION</h4>
                  <p class="text-gray-400">General Trias, Cavite - 4108</p>
                </div>
              </div>
            </div>
            
            <div class="mt-10">
              <h3 class="text-xl font-bold text-white mb-4" style="font-family: 'Orbitron', sans-serif;">CONNECT WITH ME</h3>
              <div class="flex space-x-4">
                <a href="https://github.com" target="_blank" class="social-icon bg-gray-800 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" class="social-icon bg-gray-800 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" class="social-icon bg-gray-800 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- References section commented out -->
            <!-- <div class="mt-10">
              <h3 class="text-xl font-bold text-white mb-4" style="font-family: 'Orbitron', sans-serif;">REFERENCES</h3>
              <div class="space-y-4">
                <div v-for="(ref, index) in references" :key="index" class="bg-gray-800 p-4 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg rounded-lg glass-hover">
                  <div class="glass-reflection"></div>
                  <h4 class="font-semibold text-white">{{ ref.name }}</h4>
                  <p class="text-gray-400 text-sm">{{ ref.company }}</p>
                  <p class="text-gray-400 text-sm">Phone: {{ ref.phone }}</p>
                  <p class="text-gray-400 text-sm">Email: {{ ref.email }}</p>
                </div>
              </div>
            </div> -->
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
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      // References data commented out
      // references: [
      //   {
      //     name: 'Michael Padon',
      //     company: 'HRD Singapore Pte Ltd',
      //     phone: '0917-185-0722',
      //     email: 'michaelpadon81@gmail.com'
      //   },
      //   {
      //     name: 'Noemi Reyes',
      //     company: '',
      //     phone: '0919-999-16150',
      //     email: 'noemireyes@gmail.con'
      //   }
      // ]
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      this.isSubmitting = false;
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
  transform: translateY(-2px);
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

/* Form input styles without rounded corners */
.form-group {
  @apply relative mb-6;
}
.form-input {
  @apply w-full px-4 py-3 bg-gray-800/80 border border-gray-700 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-all duration-300;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 0;
}
.form-input:focus {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
}
.form-label {
  @apply absolute left-4 top-3 text-gray-500 transition-all duration-300 pointer-events-none;
  font-family: 'Inter', sans-serif;
}
.form-input:focus + .form-label,
.form-input:not(:placeholder-shown) + .form-label {
  @apply text-cyan-400 text-xs -top-2 left-2 bg-gray-900 px-1;
}

/* Button styles without rounded corners */
.btn {
  @apply px-6 py-3 font-semibold transition-all duration-300 relative overflow-hidden;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 255, 0.1));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 0;
}
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #00d4ff, #ff00ff);
  z-index: -1;
  transition: all 0.5s;
  transform: translateX(-100%);
}
.btn-primary::before {
  background: linear-gradient(45deg, #00d4ff, #ff00ff);
}
.btn:hover::before {
  transform: translateX(0);
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
}

/* Social icon styles without rounded corners */
.social-icon {
  @apply p-3 transition-all duration-300 transform;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 0;
}
.social-icon:hover {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(255, 0, 255, 0.2) 100%);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}
</style>